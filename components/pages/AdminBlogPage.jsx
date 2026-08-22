"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  changeAdminPassword,
  createAdminAccount,
  getAdminEmail,
  hasAdminAccount,
  signOutAdmin,
  subscribeAdminAuth,
  usesCloudAuth,
  verifyAdminLogin,
} from "@/lib/blog/adminAuth.js";
import {
  createPost,
  exportPostsJson,
  importPostsJson,
  isLiveStorageConfigured,
  removePost as deletePostFromStore,
  savePost as updatePostInStore,
  seedDefaultPostsToCloud,
  slugify,
} from "@/lib/blog/blogPostsService.js";
import { useBlogPosts } from "@/lib/blog/useBlogPosts.js";
import { BLOG_CATEGORIES } from "@/lib/blog/blogCategories.js";
import { NotebookStoryCard } from "@/lib/blog/NotebookStoryCard.jsx";
import AdminResearchNotebook from "@/components/pages/AdminResearchNotebook.jsx";

const inputClass =
  "w-full rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-garamond text-ink outline-none focus:border-terracotta";

function emptyParagraph() {
  return { text: "", marginNote: "", highlighted: false };
}

function emptyForm() {
  return {
    id: "",
    title: "",
    slug: "",
    date: new Date().toISOString().slice(0, 10),
    category: "personal",
    pullQuote: "",
    signature: "— Mayesha Maliha Proma",
    signatureMeta: "from Bangladesh to Japan",
    paragraphs: [emptyParagraph(), emptyParagraph()],
  };
}

export default function AdminBlogPage() {
  const cloud = usesCloudAuth();
  const [authChecked, setAuthChecked] = useState(false);
  const [accountReady, setAccountReady] = useState(false);
  const [loggedIn, setLogged] = useState(false);
  const [userIdInput, setUserIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [accountMessage, setAccountMessage] = useState("");
  const [adminEmail, setAdminEmail] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const { posts, loading: postsLoading, error: postsError, refresh: refreshPosts } = useBlogPosts();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [mongoOnline, setMongoOnline] = useState(null);

  useEffect(() => {
    hasAdminAccount().then(setAccountReady);
    fetch("/api/auth/status")
      .then((res) => res.json())
      .then((data) => setMongoOnline(Boolean(data.mongo)))
      .catch(() => setMongoOnline(false));
    const unsub = subscribeAdminAuth((signedIn) => {
      setLogged(signedIn);
      setAuthChecked(true);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (!loggedIn) return;
    getAdminEmail().then(setAdminEmail);
  }, [loggedIn]);

  const trySetup = async (e) => {
    e.preventDefault();
    setError("");
    if (passwordInput !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await createAdminAccount(userIdInput, passwordInput);
      setAccountReady(true);
      setLogged(true);
      setUserIdInput("");
      setPasswordInput("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message || "Could not create account.");
    }
  };

  const tryLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await verifyAdminLogin(userIdInput, passwordInput);
      setLogged(true);
      setPasswordInput("");
    } catch (err) {
      setError(err.message || "Sign in failed.");
    }
  };

  const tryChangePassword = async (e) => {
    e.preventDefault();
    setAccountMessage("");
    setError("");
    if (newPassword !== newPasswordConfirm) {
      setError("New passwords do not match.");
      return;
    }
    try {
      await changeAdminPassword(currentPassword, newPassword);
      setCurrentPassword("");
      setNewPassword("");
      setNewPasswordConfirm("");
      setAccountMessage("Password updated.");
    } catch (err) {
      setError(err.message || "Could not update password.");
    }
  };

  const logout = async () => {
    await signOutAdmin();
    setLogged(false);
    setForm(emptyForm());
    setEditingId(null);
    setUserIdInput("");
    setPasswordInput("");
    setCurrentPassword("");
    setNewPassword("");
    setNewPasswordConfirm("");
    setAccountMessage("");
  };

  const loadPost = (p) => {
    setEditingId(p.id);
    setForm({
      id: p.id,
      title: p.title,
      slug: p.slug,
      date: p.date,
      category: p.category === "research" ? "research" : "personal",
      pullQuote: p.pullQuote || "",
      signature: p.signature || "",
      signatureMeta: p.signatureMeta || "",
      paragraphs: p.paragraphs.length ? p.paragraphs.map((x) => ({ ...x })) : [emptyParagraph()],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const paragraphs = form.paragraphs
        .map((p) => ({
          text: p.text.trim(),
          marginNote: p.marginNote.trim(),
          highlighted: Boolean(p.highlighted),
        }))
        .filter((p) => p.text.length > 0);

      if (!form.title.trim()) throw new Error("Title is required.");
      if (paragraphs.length === 0) throw new Error("Add at least one paragraph with body text.");

      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim() || slugify(form.title),
        date: form.date,
        category: form.category === "research" ? "research" : "personal",
        paragraphs,
        pullQuote: form.pullQuote.trim(),
        signature: form.signature.trim(),
        signatureMeta: form.signatureMeta.trim(),
      };

      if (editingId) {
        await updatePostInStore({ ...payload, id: editingId });
      } else {
        await createPost(payload);
      }
      setForm(emptyForm());
      setEditingId(null);
      await refreshPosts();
    } catch (err) {
      setError(err.message || "Could not save.");
    } finally {
      setSaving(false);
    }
  };

  const removePostById = async (id) => {
    if (!window.confirm("Delete this note permanently?")) return;
    try {
      await deletePostFromStore(id);
      await refreshPosts();
    } catch (err) {
      setError(err.message || "Could not delete.");
    }
    if (editingId === id) {
      setForm(emptyForm());
      setEditingId(null);
    }
  };

  const downloadJson = async () => {
    const blob = new Blob([await exportPostsJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `proma-notes-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        await importPostsJson(String(reader.result));
        setError("");
        setForm(emptyForm());
        setEditingId(null);
        await refreshPosts();
      } catch (err) {
        setError(err.message || "Import failed.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const runSeed = async () => {
    setError("");
    try {
      await seedDefaultPostsToCloud();
      await refreshPosts();
      setAccountMessage("Starter notes copied to the live database.");
    } catch (err) {
      setError(err.message || "Could not seed notes.");
    }
  };

  if (!authChecked) {
    return (
      <div className="mx-auto max-w-md px-6 pb-24 pt-24">
        <p className="font-garamond text-ink/60">Loading admin…</p>
      </div>
    );
  }

  if (!loggedIn) {
    const isSetup = cloud ? authMode === "setup" : !accountReady;
    return (
      <div className="mx-auto max-w-md px-6 pb-24 pt-24">
        <Link href="/notes" className="mb-8 inline-block font-hand text-lg text-terracotta hover:underline">
          ← notes
        </Link>
        <h1 className="mb-2 font-hand text-4xl font-bold text-terracotta">Admin dashboard</h1>
        <p className="mb-6 font-garamond text-[15px] leading-relaxed text-ink/70">
          {cloud
            ? isSetup
              ? "Create your admin ID and password. Notes you publish are saved in MongoDB and appear for everyone on your live site."
              : "Sign in with your admin ID and password. Publishing updates the live site for all visitors."
            : isSetup
              ? "Create your private admin ID and password once on this browser. Only you can sign in and publish notes from here."
              : "Sign in with your admin ID and password. Notes save in this browser — export JSON backups after you publish."}
        </p>
        {cloud && isLiveStorageConfigured() ? (
          <p className="mb-4 font-mono text-[10px] leading-relaxed text-ink/45">
            Live storage on · MongoDB
          </p>
        ) : null}
        <form onSubmit={isSetup ? trySetup : tryLogin} className="space-y-4">
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">admin ID</span>
            <input
              type="text"
              value={userIdInput}
              onChange={(ev) => setUserIdInput(ev.target.value)}
              className={inputClass}
              autoComplete="username"
              placeholder="e.g. proma"
            />
          </label>
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">password</span>
            <input
              type="password"
              value={passwordInput}
              onChange={(ev) => setPasswordInput(ev.target.value)}
              className={inputClass}
              autoComplete={isSetup ? "new-password" : "current-password"}
              minLength={isSetup ? 8 : undefined}
            />
          </label>
          {isSetup ? (
            <label className="block space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">confirm password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
                className={inputClass}
                autoComplete="new-password"
                minLength={8}
              />
            </label>
          ) : null}
          {error ? <p className="font-garamond text-sm text-terracotta">{error}</p> : null}
          <button
            type="submit"
            className="rounded-sm border-2 border-terracotta bg-terracotta px-5 py-2 font-garamond text-paper transition-colors hover:bg-terracottaDark"
          >
            {isSetup ? "Create admin account" : "Sign in"}
          </button>
        </form>
        {cloud ? (
          <p className="mt-4 font-garamond text-[14px] text-ink/55">
            {isSetup ? (
              <>
                Already have an account?{" "}
                <button type="button" onClick={() => setAuthMode("login")} className="text-terracotta underline">
                  Sign in
                </button>
              </>
            ) : (
              <>
                First time?{" "}
                <button type="button" onClick={() => setAuthMode("setup")} className="text-terracotta underline">
                  Create account
                </button>
              </>
            )}
          </p>
        ) : isSetup ? (
          <p className="mt-4 font-mono text-[10px] leading-relaxed text-ink/45">
            Password must be at least 8 characters. Your ID is stored on this device only (not in source code).
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[900px] space-y-12 px-6 pb-32 pt-20 lg:px-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-hand text-4xl font-bold text-terracotta">Admin dashboard</h1>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink/40">
            signed in as {adminEmail ?? "admin"}
            {mongoOnline ? " · live database" : " · local files (Atlas offline)"} · export often
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/notes" className="rounded-sm border-2 border-terracotta px-4 py-2 font-hand text-lg text-terracotta hover:bg-terracotta/10">
            view notes
          </Link>
          <button
            type="button"
            onClick={logout}
            className="rounded-sm border-2 border-[rgba(204,66,44,0.25)] px-4 py-2 font-hand text-lg text-ink/70 hover:border-terracotta/40"
          >
            sign out
          </button>
        </div>
      </div>

      {mongoOnline === false ? (
        <p className="rounded-sm border border-terracotta/25 bg-[#fffaf8] px-4 py-3 font-garamond text-[14px] leading-relaxed text-ink/70">
          MongoDB Atlas is offline (the old cluster hostname no longer exists). Publishing now saves on this
          machine under <code className="font-mono text-[12px]">data/</code>. New notebook entries still appear
          on the site. Restore a new Atlas URI in <code className="font-mono text-[12px]">.env</code> when you
          want cloud storage again.
        </p>
      ) : null}

      <section className="rounded-sm border-2 border-[rgba(204,66,44,0.25)] bg-paperSoft p-5 shadow-[3px_4px_0_rgba(192,68,42,0.12)]">
        <h2 className="mb-2 font-hand text-2xl font-bold text-terracotta">Account</h2>
        {mongoOnline === false ? (
          <p className="font-garamond text-[14px] text-ink/60">
            This login uses <code className="font-mono text-[12px]">ADMIN_ID</code> and{" "}
            <code className="font-mono text-[12px]">ADMIN_PASSWORD</code> in the server environment. Change those
            values and redeploy to update the password.
          </p>
        ) : (
          <p className="mb-4 font-garamond text-[14px] text-ink/60">Change your password. Your admin ID stays the same.</p>
        )}
        {mongoOnline === false ? null : (
        <form onSubmit={tryChangePassword} className="grid max-w-md gap-3">
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">current password</span>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={inputClass}
              autoComplete="current-password"
            />
          </label>
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">new password</span>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={inputClass}
              autoComplete="new-password"
              minLength={8}
            />
          </label>
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">confirm new password</span>
            <input
              type="password"
              value={newPasswordConfirm}
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
              className={inputClass}
              autoComplete="new-password"
              minLength={8}
            />
          </label>
          <button
            type="submit"
            className="w-fit rounded-sm border-2 border-[rgba(204,66,44,0.35)] px-4 py-2 font-garamond text-sm text-ink hover:border-terracotta"
          >
            Update password
          </button>
          {accountMessage ? <p className="font-garamond text-sm text-ink/70">{accountMessage}</p> : null}
        </form>
        )}
      </section>

      <section className="rounded-sm border-2 border-[rgba(204,66,44,0.25)] bg-paperSoft p-5 shadow-[3px_4px_0_rgba(192,68,42,0.12)]">
        <h2 className="mb-4 font-hand text-2xl font-bold text-terracotta">Published notes</h2>
        {postsLoading ? <p className="font-garamond text-sm text-ink/50">Loading notes…</p> : null}
        {postsError && !/querySrv|ENOTFOUND/i.test(postsError) ? (
          <p className="mb-3 font-garamond text-sm text-terracotta">{postsError}</p>
        ) : null}
        {mongoOnline && posts.length === 0 && !postsLoading ? (
          <button
            type="button"
            onClick={runSeed}
            className="mb-4 rounded-sm border-2 border-terracotta px-4 py-2 font-garamond text-sm text-terracotta hover:bg-terracotta/10"
          >
            Copy starter notes to live database
          </button>
        ) : null}
        <ul className="space-y-2">
          {posts.map((p) => (
            <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-terracotta/10 py-2 last:border-0">
              <div>
                <span className="font-garamond font-semibold text-ink">{p.title}</span>
                <span className="ml-2 rounded-sm border border-terracotta/20 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-terracotta/70">
                  {p.category === "research" ? "research" : "personal"}
                </span>
                <span className="ml-2 font-mono text-[10px] text-ink/40">{p.date}</span>
                <span className="ml-2 font-mono text-[10px] text-terracotta/50">/{p.slug}</span>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => loadPost(p)} className="font-hand text-lg text-terracotta hover:underline">
                  edit
                </button>
                <button type="button" onClick={() => removePostById(p.id)} className="font-hand text-lg text-terracotta/50 hover:text-terracotta">
                  delete
                </button>
                <Link href={`/notes/${p.slug}`} className="font-hand text-lg text-ink/50 hover:text-terracotta">
                  view
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={downloadJson}
            className="rounded-sm border-2 border-terracotta bg-terracotta px-4 py-2 font-garamond text-sm text-paper hover:bg-terracottaDark"
          >
            Export JSON backup
          </button>
          <label className="cursor-pointer rounded-sm border-2 border-[rgba(204,66,44,0.35)] px-4 py-2 font-garamond text-sm text-ink hover:bg-paper">
            Import JSON
            <input type="file" accept="application/json,.json" className="hidden" onChange={onImportFile} />
          </label>
        </div>
      </section>

      <AdminResearchNotebook />

      <section>
        <h2 className="mb-2 font-hand text-3xl font-bold text-terracotta">{editingId ? "Edit note" : "New personal / blog note"}</h2>
        {error ? <p className="mb-4 font-garamond text-sm text-terracotta">{error}</p> : null}

        <form onSubmit={submitPost} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">title</span>
              <input
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                className="w-full rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-garamond text-ink"
              />
            </label>
            <label className="block space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">slug (optional)</span>
              <input
                value={form.slug}
                onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                placeholder={form.title ? slugify(form.title) : "auto-from-title"}
                className="w-full rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-mono text-sm text-ink"
              />
            </label>
            <label className="block space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">date</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className="w-full max-w-xs rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-mono text-sm text-ink"
              />
            </label>
            <label className="block space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">category</span>
              <select
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full max-w-xs rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-garamond text-ink"
              >
                <option value="personal">{BLOG_CATEGORIES.personal.label}</option>
                <option value="research">{BLOG_CATEGORIES.research.label}</option>
              </select>
            </label>
          </div>

          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">pull quote (italic block)</span>
            <textarea
              value={form.pullQuote}
              onChange={(e) => setForm((f) => ({ ...f, pullQuote: e.target.value }))}
              rows={2}
              className="w-full rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-garamond text-ink"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">signature</span>
              <input
                value={form.signature}
                onChange={(e) => setForm((f) => ({ ...f, signature: e.target.value }))}
                className="w-full rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-hand text-xl text-ink"
              />
            </label>
            <label className="block space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">signature meta</span>
              <input
                value={form.signatureMeta}
                onChange={(e) => setForm((f) => ({ ...f, signatureMeta: e.target.value }))}
                className="w-full rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-mono text-xs text-ink"
              />
            </label>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-hand text-2xl text-terracotta">Paragraphs</h3>
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, paragraphs: [...f.paragraphs, emptyParagraph()] }))}
                className="font-hand text-lg text-terracotta hover:underline"
              >
                + add paragraph
              </button>
            </div>

            {form.paragraphs.map((para, idx) => (
              <div key={idx} className="rounded-sm border-2 border-[rgba(204,66,44,0.2)] bg-paper/80 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-ink/40">§ {idx + 1}</span>
                  <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-ink/50">
                    <input
                      type="checkbox"
                      checked={para.highlighted}
                      onChange={(e) => {
                        const paragraphs = form.paragraphs.map((p, i) =>
                          i === idx ? { ...p, highlighted: e.target.checked } : p
                        );
                        setForm((f) => ({ ...f, paragraphs }));
                      }}
                    />
                    highlight
                  </label>
                </div>
                <label className="mb-2 block space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">margin note</span>
                  <input
                    value={para.marginNote}
                    onChange={(e) => {
                      const paragraphs = form.paragraphs.map((p, i) =>
                        i === idx ? { ...p, marginNote: e.target.value } : p
                      );
                      setForm((f) => ({ ...f, paragraphs }));
                    }}
                    className="w-full rounded-sm border border-terracotta/25 bg-paperSoft px-2 py-1 font-hand text-lg text-ink"
                  />
                </label>
                <label className="block space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">body</span>
                  <textarea
                    value={para.text}
                    onChange={(e) => {
                      const paragraphs = form.paragraphs.map((p, i) =>
                        i === idx ? { ...p, text: e.target.value } : p
                      );
                      setForm((f) => ({ ...f, paragraphs }));
                    }}
                    rows={4}
                    className="w-full rounded-sm border border-terracotta/25 bg-paperSoft px-2 py-2 font-garamond text-[15px] leading-relaxed text-ink"
                  />
                </label>
                {form.paragraphs.length > 1 ? (
                  <button
                    type="button"
                    className="mt-2 font-hand text-terracotta/60 hover:text-terracotta"
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        paragraphs: f.paragraphs.filter((_, i) => i !== idx),
                      }))
                    }
                  >
                    remove paragraph
                  </button>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-sm border-2 border-terracotta bg-terracotta px-6 py-2.5 font-garamond text-paper shadow-button hover:bg-terracottaDark"
            >
              {saving ? "Saving…" : editingId ? "Save changes" : "Publish note"}
            </button>
            {editingId ? (
              <button
                type="button"
                onClick={() => {
                  setForm(emptyForm());
                  setEditingId(null);
                  setError("");
                }}
                className="rounded-sm border-2 border-[rgba(204,66,44,0.3)] px-6 py-2.5 font-garamond text-ink hover:bg-paperSoft"
              >
                Cancel edit
              </button>
            ) : null}
          </div>
        </form>
      </section>

      <section>
        <h2 className="mb-4 font-hand text-2xl font-bold text-terracotta">Live preview</h2>
        <div className="mb-8 flex items-baseline gap-3">
          <h3 className="font-hand text-[28px] font-bold text-terracotta md:text-[34px]">{form.title || "Untitled note"}</h3>
          <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        </div>
        <NotebookStoryCard
          animate={false}
          paragraphs={
            form.paragraphs.filter((p) => p.text.trim()).length
              ? form.paragraphs.filter((p) => p.text.trim())
              : [{ text: "…", marginNote: "…", highlighted: false }]
          }
          pullQuote={form.pullQuote}
          signature={form.signature}
          signatureMeta={form.signatureMeta}
        />
      </section>
    </div>
  );
}

export function DetailCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-line bg-paperSoft p-4 shadow-[0_1px_6px_rgba(55,35,30,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

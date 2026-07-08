export function DetailCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border-[1.5px] border-line bg-white p-5 shadow-[0_2px_10px_rgba(55,35,30,0.05)] md:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

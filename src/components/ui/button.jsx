import React from "react";

export const Button = React.forwardRef(function Button(
  { className = "", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red/40 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    />
  );
});

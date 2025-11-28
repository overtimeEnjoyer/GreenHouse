"use client";

import { useEffect } from "react";

export function Toast({ message, type, onClose }: any) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 right-6 px-5 py-3 rounded-lg shadow-xl text-white text-sm
        transition-all duration-300
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {message}
    </div>
  );
}

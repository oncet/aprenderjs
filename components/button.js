import Link from "next/link";

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="animate-spin"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#4f46e5"
        strokeWidth="11"
        r="41"
        strokeDasharray="193.20794819577225 66.40264939859075"
        transform="matrix(1,0,0,1,0,0)"
      ></circle>
    </svg>
  );
}

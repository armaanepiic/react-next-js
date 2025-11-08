export default function Badge({ badgeName }) {
  return (
    <div className="px-3.5 py-1.5 bg-white shadow-xs overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]">
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="3"
          width="4"
          height="6"
          stroke="#37322F"
          strokeWidth="1"
          fill="none"
        />
        <rect
          x="7"
          y="1"
          width="4"
          height="8"
          stroke="#37322F"
          strokeWidth="1"
          fill="none"
        />
        <rect x="2" y="4" width="1" height="1" fill="#37322F" />
        <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
        <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
        <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
        <rect x="8" y="2" width="1" height="1" fill="#37322F" />
        <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
        <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
        <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
        <rect x="8" y="5" width="1" height="1" fill="#37322F" />
        <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
      </svg>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
        {badgeName}
      </div>
    </div>
  );
}

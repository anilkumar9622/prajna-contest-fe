import { FC } from "react";

interface IconProps {
  className?: string;
  fill?: boolean;
}

const IconDOB: FC<IconProps> = ({ className, fill = false }) => {
  return (
    <>
      {!fill ? (
        <svg
          className={className}
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      ) : (
        <svg
          className={className}
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      )}
    </>
  );
};

export default IconDOB;

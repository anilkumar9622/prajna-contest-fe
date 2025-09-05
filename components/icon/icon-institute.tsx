import { FC } from "react";

interface IconProps {
  className?: string;
  fill?: boolean;
}

const IconInstitute: FC<IconProps> = ({ className, fill = false }) => {
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
          <path d="M4 22h16M4 10h16M10 6h4l-2-4-2 4z" />
          <path d="M4 10v12M20 10v12M9 22v-6h6v6" />
        </svg>
      ) : (
        <svg
          className={className}
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 22h16M4 10h16M10 6h4l-2-4-2 4z" />
          <path d="M4 10v12M20 10v12M9 22v-6h6v6" />
        </svg>
      )}
    </>
  );
};

export default IconInstitute;

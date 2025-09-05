import { FC } from "react";

interface IconProps {
  className?: string;
  fill?: boolean;
}

const IconGender: FC<IconProps> = ({ className, fill = false }) => {
  return (
    <>
      {!fill ? (
        // Outline
        <svg
          className={className}
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M12 13v9M9 18h6" />
        </svg>
      ) : (
        // Fill
        <svg
          className={className}
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M12 13v9M9 18h6" />
        </svg>
      )}
    </>
  );
};

export default IconGender;

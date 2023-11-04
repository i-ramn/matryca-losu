import { HTMLAttributes, FC } from 'react';

interface CloseButtonProps {
  className?: string;
  onClick?: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ className, onClick }) => {
  return (
    <div className={`${className} ${'absolute -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'}`}>
      <button
        type="button"
        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={onClick}
      >
        <span className="absolute -inset-2.5"></span>
        <span className="sr-only">Close panel</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

import { twMerge } from 'tailwind-merge';
import { FaLink } from 'react-icons/fa6';

interface ResumeItemProps {
  header?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  orderBy?: string;
  href?: string;
}

function ResumeItem({
  header,
  title,
  className,
  children,
  orderBy,
  href,
}: ResumeItemProps) {
  return (
    <div className={orderBy}>
      {header && (
        <h2 className="text-2xl text-secondary font-bold my-5">{header}</h2>
      )}
      <div
        className={twMerge(
          'border-l-2 px-5  relative pb-3 border-primary before:w-4 before:h-4 before:rounded-full before:border-2 before:border-primary before:bg-white before:absolute before:top-0 before:-left-[9px]',
          className
        )}
      >
        <h1 className="text-primary text-lg font-bold mb-2">
          {href ? (
            <a href={href} className="flex items-center gap-2">
              {title.toUpperCase()}
              <FaLink />
            </a>
          ) : (
            <span>{title.toUpperCase()}</span>
          )}
        </h1>
        <div className="flex flex-col gap-1 space-y-2">{children}</div>
      </div>
    </div>
  );
}

export default ResumeItem;

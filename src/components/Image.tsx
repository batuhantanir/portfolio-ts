import { twMerge } from 'tailwind-merge';

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

function Image({ src, alt, className }: ImageProps) {
  return (
    <div className={twMerge('overflow-hidden ', className)}>
      <img rel="preload" className="w-full h-full" src={src} alt={alt} />
    </div>
  );
}

export default Image;

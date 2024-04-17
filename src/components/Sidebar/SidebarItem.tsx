import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  item: typeof import('@/mocks/constants').sidebarData[0];
  activeSection: string;
  className?: string;
  onClick?: () => void;
}

function SidebarItem({
  item,
  className,
  activeSection,
  ...props
}: SidebarItemProps) {
  return (
    <a
      className={twMerge(
        ' z-[1000] flex flex-col-reverse lg:flex-row items-center gap-2 group lg:h-fit p-3.5 sm:p-4 cursor-pointer bg-thirtd rounded-full transition-all duration-300 ease-in-out hover:bg-primary hover:text-white active:bg-primary lg:shadow-md shadow-black group-hover:shadow-xl w-fit lg:w-[3.7rem] lg:hover:w-[100%] h-[3.8rem] hover:h-fit',
        activeSection.toLowerCase() === item.labelName.toLowerCase() &&
          'bg-primary text-white lg:w-fit h-fit '
      )}
      {...props}
      href={`#${item.labelName.toLowerCase()}`}
    >
      <span className="p-1">
        <item.icon size={20} />
      </span>
      <span
        id="label"
        className={twMerge(
          'opacity-0 group-hover:opacity-100 group-hover:block group-hover:duration-100 transition-opacity ease-in vertical-lr lg:horizontal-tb w-fit h-fit',
          activeSection.toLowerCase() === item.labelName.toLowerCase() &&
            'opacity-100'
        )}
      >
        {item.labelName}
      </span>
    </a>
  );
}

export default SidebarItem;

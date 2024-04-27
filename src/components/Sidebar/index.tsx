import SidebarItem from './SidebarItem';
import { sidebarData } from '@/mocks/constants';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/lib/hooks';

function Sidebar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <motion.header>
      <nav>
        <div
          className="flex items-end lg:flex-col lg:items-start scale-90 sm:scale-100 gap-1.5 sm:gap-3 fixed bottom-5 left-1/2 -translate-x-1/2 lg:top-1/2
                     lg:left-5 z-[1000] lg:-translate-x-0 lg:-translate-y-1/2 transition-all ease-in-out  before:absolute before:w-[345px] before:sm:w-[375px] before:h-20
                     before:z-[400] before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:rounded-3xl before:bg-white before:shadow-costum
                     lg:before:hidden"
        >
          {sidebarData.map((item, index) => (
            <SidebarItem
              item={item}
              activeSection={activeSection}
              onClick={() => setActiveSection(item.labelName.toLowerCase())}
              key={index}
              isMobile={isMobile}
            />
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

export default Sidebar;

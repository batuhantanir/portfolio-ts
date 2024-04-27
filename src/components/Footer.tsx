import { socialMedia } from '@/mocks/constants';

function Footer() {
  return (
    <section id="footer" className="bg-thirtd relative">
      <footer className="flex flex-col items-center gap-5 pb-32 pt-8 container mx-auto lg:pb-5 ">
        <div className="flex gap-3">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white rounded-full bg-primary p-2 hover:bg-primary/90 active:scale-95"
            >
              <item.icon size={25} />
            </a>
          ))}
        </div>
        <div>© Copyright Batuhan tanır.</div>
      </footer>
    </section>
  );
}

export default Footer;

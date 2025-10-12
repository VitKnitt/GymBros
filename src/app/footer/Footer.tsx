import Image from "next/image";
import logo from '../../assets/icons/logo.png'

const Footer = () => {
  return (
    <footer
      id="Kontakt"
      className="bg-one text-gray-300 py-10 border-t-4 border-three"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between flex-wrap">
        {/* Logo + krátký text */}
        <div>
          <Image
            src={logo}
            alt="logoMini"
            className="mb-3"
            width={64}
            height={64}
            unoptimized
          />
          <p className="text-sm">
            Přijď si k nám zacvičit a posuň svoje tělo na další level!
          </p>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-white font-semibold mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>gymbros@gmail.com</li>
          </ul>
        </div>

        {/* Adresa */}
        <div>
          <h3 className="text-white font-semibold mb-3">Adresa</h3>
          <ul className="space-y-2 text-sm">
            <li>Jičínská 247</li>
            <li>742 58 Příbor</li>
          </ul>
        </div>
      </div>
      <div>
      </div>
      {/* spodní lišta */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
};

export default Footer;

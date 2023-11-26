import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import logo from "../assets/images/logo.png"; // Importa la imagen del logo

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="w-full px-2">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <img src={logo} alt="HenryCafe Logo" className="h-28 md:h-40 mr-4" />
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://don-henry-cafe-frontend.vercel.app/">
              Don Henry Café
            </a>
            . Todos los derechos reservados.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://wtsi.me/573005710804"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaWhatsapp
                className="h-5 w-5"
                style={{ color: '#25D366' }}
              />
            </Typography>
            <Typography
              as="a"
              href="https://www.instagram.com/donhenrycafe/"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaInstagram
                className="h-5 w-5"
                style={{ color: '#C13584' }}
              />
            </Typography>
            <Typography
              as="a"
              href="https://www.facebook.com/donhenrycafe/"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaFacebook
                className="h-5 w-5"
                style={{ color: '#1877F2' }}
              />
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

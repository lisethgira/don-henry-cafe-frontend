import  { useState } from "react";
import { Map, Draggable } from "pigeon-maps";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';
import logo from '../assets/images/logo.png'; // Importa la imagen del logo

const LINKS = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [anchor, setAnchor] = useState([6.2304, -75.6003]);

  return (
    <>
      <div className="w-full px-2 bg-white text-gray-800">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 py-8 items-center">
          <div className="flex items-center"> {/* Agrega Flexbox aquí */}
            <img src={logo} alt="HenryCafe Logo" className="h-28 md:h-40 mr-4" /> {/* Añade margen a la derecha del logo */}
            <div className="w-72 h-72"> {/* Define el tamaño del mapa aquí */}
              <Map height={200} defaultCenter={[6.2304, -75.6003]} defaultZoom={10}>
                <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
                  <img src="pigeon.svg" width={80} height={80} alt="Pigeon!" />
                </Draggable>
              </Map>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-center gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-60"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-gray-900 hover:opacity-0"
                      style={{ transitionDuration: '0.3s' }}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center border-t border-gray-200 py-4">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal"
          >
            &copy; {currentYear}{' '}
            <a href="https://henrycafe.com/">HenryCafe</a>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 sm:justify-center items-center">
            <a
              href="https://wtsi.me/573005710804"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-green-500 flex items-center"
            >
              <FaWhatsapp
                size={28}
                className="mr-1"
                style={{ color: '#25D366' }}
              />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/donhenrycafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-fuchsia-500 flex items-center"
            >
              <FaInstagram
                size={28}
                className="mr-1"
                style={{ color: '#C13584' }}
              />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/donhenrycafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-blue-500 flex items-center"
            >
              <FaFacebook
                size={28}
                className="mr-1"
                style={{ color: '#1877F2' }}
              />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

















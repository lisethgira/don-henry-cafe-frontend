import { Typography } from "@material-tailwind/react";

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
      <div className="w-full px-2 bg-white text-gray-800">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 py-8">
          <Typography variant="h5" className="mb-6">
            HenryCafe
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
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
                      style={{ transitionDuration: "0.3s" }}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-gray-200 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://henrycafe.com/">HenryCafe</a>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {/* Icon SVG */}
            </Typography>
            {/* ... Other social icons */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;








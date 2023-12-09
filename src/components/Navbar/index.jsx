import { DarkModeBtn } from "../DarkModeBtn";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-6">
      <ul className="flex gap-4 h-full text-neutral-600 dark:text-neutral-400 font-medium">
        <li className="flex items-center ">
          <a href="#about" className="hover:underline">
            Sobre mi
          </a>
        </li>
        <li className="flex items-center ">
          <a href="#projects" className="hover:underline">
            Proyectos
          </a>
        </li>
      </ul>
      <DarkModeBtn />
    </nav>
  );
}

export { Navbar }
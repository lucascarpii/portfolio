import { DarkModeBtn } from "../DarkModeBtn";

const Navbar = () => {
  return (
    <nav className="flex justify-center w-full py-6">
      <ul className="flex gap-4 h-full text-neutral-600 dark:text-neutral-200">
        <li className="flex items-center ">Sobre mi</li>
        <li className="flex items-center ">Experiencia</li>
        <DarkModeBtn />
      </ul>
    </nav>
  );
}

export { Navbar }
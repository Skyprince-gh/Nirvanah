import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  }
  return (
    <nav className="h-16 flex justify-center bg-black bg-opacity-60 min-w-full sm:min-w-screen-md md:min-w-screen-lg lg:min-w-screen-xl xl:min-w-screen-2xl">
      <div className="flex justify-between w-full items-center">
        <div className="text-[wheat] xsm:text-2xl ml-2">Logo</div>
        <ul className="lg:w-1/3 md:w-2/4 flex justify-between text-[20px] text-[wheat] xsm:hidden md:flex">
          <Link href="#home">
            <li className="hover:text-yellow-300">Home</li>
          </Link>
          <Link href="#about">
            <li className="hover:text-yellow-300">About</li>
          </Link>
          <Link href="#highlights">
            <li className="hover:text-yellow-300">Hightlights</li>
          </Link>
          <Link href="#socials">
            <li className="hover:text-yellow-300"> Socials</li>
          </Link>
        </ul>
        <div className="flex justify-center md:hidden sm:pr-10 xsm:pr-2 text-[wheat] relative">
          <Menu style={{ color: "wheat" }} onClick={toggleMenu} />
          {isToggled && (
            <ul className="w-[150px] rounded-lg h-auto p-3 absolute top-[40px] right-[10px] bg-black border " onClick={toggleMenu}>
              <Link href="#home">
                <li className="active:text-yellow-300">Home</li>
              </Link>
              <Link href="#about">
                <li className="active:text-yellow-300">About</li>
              </Link>
              <Link href="#highlights">
                <li className="active:text-yellow-300">Hightlights</li>
              </Link>
              <Link href="#socials">
                <li className="active:text-yellow-300">Socials</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

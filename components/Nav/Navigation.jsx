import { Menu } from "@mui/icons-material";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-16 flex justify-center bg-black bg-opacity-60 min-w-full sm:min-w-screen-md md:min-w-screen-lg lg:min-w-screen-xl xl:min-w-screen-2xl">
      <div className="flex justify-between w-full items-center">
        <div className="text-[wheat] xsm:text-2xl ml-2">Logo</div>
        <ul className="lg:w-1/3 md:w-2/4 flex justify-between text-[20px] text-[wheat] xsm:hidden md:flex">
          <Link href="#home"><li>Home</li></Link>
          <Link href="#about"><li>About</li></Link>
          <Link href="#highlights"><li>Hightlights</li></Link>
          <Link href="#socials"><li>Socials</li></Link>
        </ul>
        <div className="flex justify-center md:hidden sm:pr-10 xsm:pr-2 text-[wheat]"><Menu style={{color:"wheata"}}/></div>
      </div>
    </nav>
  );
}

import Link from "next/link";
import {
  Instagram,
  MusicNote,
} from "@mui/icons-material";

const Footer = () => {
  const fullWidthOnAllScreens =
    " xsm:min-w-full min-w-full sm:min-w-screen-md md:min-w-screen-lg lg:min-w-screen-xl xl:min-w-screen-2xl";

  return (
    <div
      className={`${fullWidthOnAllScreens} flex justify-center items-center gap-24 bg-white xsm:h-[100px] xsm:flex-col-reverse md:flex-row md:h-[50px] relative mt-10`}
      id="socials"
    >
      <p className="xsm:absolute md:static bottom-0">
        &copy; 2023 The Nirvana Experience
      </p>
      <div className="xsm:absolute md:static font-bold">
        <Link href="https://instagram.com/the.nirvanaexperience?igshid=MzRlODBiNWFlZA==">
          <Instagram style={{ fontSize: "50px" }} /> <span>Instagram</span>
        </Link>
        <Link href="https://www.tiktok.com/@thenirvanaexperience?_t=8gbCKqtzvwD&_r=1">
          {" "}
          <MusicNote style={{ fontSize: "50px" }} /> <span>Tiktok</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

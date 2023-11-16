import Navbar from "../components/Nav/Navigation";
import { Fragment, useState } from "react";
import Image from "next/image";
import Card from "../components/Cards/card";
import { Instagram, MusicNote } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";
// import Carousel from "../components/Special/carousel";

export default function HomePage() {
  const [num2, setNum2] = useState("THE NIRVANA EXPERIENCE");
  const fullWidthOnAllScreens =
    " xsm:min-w-full min-w-full sm:min-w-screen-md md:min-w-screen-lg lg:min-w-screen-xl xl:min-w-screen-2xl";
  const fullHeightOnAllScreens =
    "xsm:min-h-screen min-h-screen sm:min-h-screen-md md:min-h-screen-lg lg:min-h-screen-xl xl:min-h-screen-2xl";

  return (
    <Fragment>
      <Head>
        {/* Title */}
        <title>Home</title>
        {/* Meta tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no "
        />
      </Head>

      {/* Another Component */}
      <div
        className={`bg-[url('/images/obm.jpeg')] bg-no-repeat bg-cover border-2 border-red-900  flex flex-col ${fullWidthOnAllScreens} ${fullHeightOnAllScreens}`}
      >
        <Navbar />
        <section className="h-[200px] mt-32 " id="home">
          <div className="text-[wheat]">
            <div className=" flex flex-col items-center ">
              <h1 className="text-[90px] font-bold flex justify-start w-11/12 xsm:text-center md:text-left xsm:text-[40px] md:text-[60px] lg:text-[70px] ">
                {num2}
              </h1>
              <div className="flex flex-col items-start w-11/12 xsm:m-10 md:m-5 lg:m-2 xsm:text-center xsm:block sm:text-left">
                <p className="text-[20px]">Discover the best Concert</p>
                <p className="text-[20px]">Show Tailored to your taste</p>
                <button className="h-10 sm:h-12 bg-[#303C57] px-5 sm:px-6 mt-5 sm:mt-10">
                  Find a concert
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Another Component */}
      <div className="w-11/12   mx-auto my-0 pt-24 " id="about">
        <h2 className="text-[68px] flex justify-center w-full mb-24">About</h2>
        <div className="md:flex md:flex-row gap-10  justify-center items-center xsm:flex xsm:flex-col">
          <div className="xl:w-1/4 font-bold md:w-1/2">
            <h2>Nirvana</h2>
            Nirvana is a place of perfect peace and happiness,a sort of
            heaven,everyone needs inner peace and craves for a feel of what
            Nirvana is once in his/her lifetime because we believe in this we
            want to invite everyone to join us to party and have a real feel of
            what Nirvana is.Relating to the fact that we normally have peace and
            serenity when we’re closer to nature,we have chosen green as the
            theme color of the event
          </div>
          <div className="xl:w-1/4 h-full md:w-1/2">
            <Image src="/images/nirvanexp.jpeg" width={500} height={500} />
          </div>
        </div>
      </div>

      {/* Another Component */}
      <div className="w-11/12 flex gap-[150px] xsm:flex xsm:flex-col xsm:items-center md:flex-row md:gap-[50px] sm:gap-[20px] justify-center mx-auto my-0 pt-24">
        {/* Another component */}
        <Card image="/images/nirvanexp.jpeg" />
        <Card image="/images/organizer_Hakeem.jpeg" />
        <Card image="/images/upcoming.jpeg" />
      </div>

      <div className="pt-24 " id="highlights">
        <h2 className="text-[68px] flex justify-center w-full mb-24">
          Highlights
        </h2>
        <div className="w-full relative h-[900px]">
         {/* <Carousel></Carousel> */}
           <Image
            fill
            src="/images/trumpet.jpeg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div
        className={`${fullWidthOnAllScreens} flex justify-center items-center gap-24 border border-red-800 xsm:h-[100px] xsm:flex-col-reverse md:flex-row md:h-[50px] relative`}
        id="socials"
      >
        <p className="xsm:absolute md:static bottom-0">
          &copy; 2023 The Nirvana Experience
        </p>
        <div className="xsm:absolute md:static ">
          <Link href="https://instagram.com/the.nirvanaexperience?igshid=MzRlODBiNWFlZA==" ><Instagram style={{ fontSize: "50px" }} /></Link>
         <Link href="https://www.tiktok.com/@thenirvanaexperience?_t=8gbCKqtzvwD&_r=1"> <MusicNote style={{ fontSize: "50px" }} /></Link>
        </div>
      </div>
    </Fragment>
  );
}

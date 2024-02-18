import { Fragment } from "react";
import Navbar from "../components/Nav/Navigation";
import Image from "next/image";
import Footer from "../components/footer";

const HighlightsPage = () => {
  const arr = [
    "/images/Experience_2023/1.png",
    "/images/Experience_2023/2.png",
    "/images/Experience_2023/3.png",
    "/images/Experience_2023/4.png",
  ];
  return (
    <div className="bg-[url('/images/obm.jpeg')] bg-no-repeat bg-cover">
      <Navbar />
      <div className="flex   object-cover gap-[20px] w-full flex-wrap justify-center mt-10">
        <img
          src="/images/Experience_2023/1.png"
          alt=""
          className="block max-h-[500px]"
        />
        <img
          src="/images/Experience_2023/2.png"
          alt=""
          className="block  max-h-[500px]"
        />
        <img
          src="/images/Experience_2023/6.png"
          alt=""
          className="block max-h-[500px]"
        />
        <img
          src="/images/Experience_2023/5.png"
          alt=""
          className="block max-h-[500px]"
        />
        <img
          src="/images/Experience_2023/3.png"
          alt=""
          className="block max-h-[500px]"
        />
        <img
          src="/images/Experience_2023/4.png"
          alt=""
          className="block max-h-[500px]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default HighlightsPage;

import Navbar from "../components/Nav/Navigation";
import { Fragment, useState } from "react";
import Image from "next/image";
import Card from "../components/Cards/card"; 
import {Instagram, MusicNote} from "@mui/icons-material"

export default function HomePage() {
  
 
  const [num2, setNum2] = useState("THE NIRVANA EXPERIENCE")

  return (
    <Fragment>
      {/* Another Component */}
      <div className="bg-[url('/images/obm.jpeg')] bg-no-repeat bg-cover h-screen flex flex-col">
        <Navbar />
        <section className="h-[200px] mt-32">
          <div className="text-[wheat]">
            <div className=" flex flex-col items-center ">
              <h1 className="text-[90px] font-bold flex justify-start w-11/12 xsm:text-center md:text-left ">
                {num2}
              </h1>
              <div className="flex flex-col items-start w-11/12 xsm:text-center xsm:block md:text-left">
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
      <div className="w-11/12   mx-auto my-0 pt-24 ">
        <h2 className="text-[68px] flex justify-center w-full mb-24">About</h2>
        <div className="md:flex md:flex-row gap-10  justify-center items-center xsm:flex xsm:flex-col">
          <div className="xl:w-1/4 font-bold md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            mollitia totam magnam magni atque temporibus vero, vel porro,
            recusandae officia iure sunt maiores quia sapiente consequuntur odit
            consectetur quo esse! Delectus aliquam modi veniam. Eum aut,
            explicabo veritatis expedita ipsa a quia suscipit magni rem ducimus
            sunt atque repellendus, quod quisquam modi delectus reiciendis fugit
            eveniet temporibus quo harum enim! Laudantium earum cupiditate culpa
            et nobis voluptatibus temporibus placeat nisi esse inventore. Dolor
            quibusdam accusantium aspernatur, enim ipsa quod ea illum
            voluptatibus voluptate inventore facere, deserunt sapiente
            praesentium odio obcaecati?
          </div>
          <div className="xl:w-1/4 h-full md:w-1/2">
            <Image src="/images/nirvanexp.jpeg" width={500} height={500} />
          </div>
        </div>
      </div>

      {/* Another Component */}
      <div className="w-11/12 flex gap-[150px] xsm:flex xsm:flex-col xsm:items-center md:flex-row md:gap-[50px] sm:gap-[20px] justify-center mx-auto my-0 pt-24">
        {/* Another component */}
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="pt-24 ">
        <h2 className="text-[68px] flex justify-center w-full mb-24">
          Highlights
        </h2>
        <div className="w-full relative h-[900px]">
          <Image
            fill
            src="/images/trumpet.jpeg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="xsm:h-[200px] xsm:flex xsm:flex-col xsm:items-center xsm:justify-center w-full h-20 bg-gray-300 flex justify-center items-center relative font-bold text-xl">
        &copy; 2023 The Nirvana Experience
        <div className="absolute bottom-0 flex items-center  right-4 w-[200px] xsm:w-full xsm:justify-center gap-4 text-[70px]">
          <Instagram style={{fontSize: "50px"}} />
          <MusicNote style={{fontSize: "50px"}} />
        </div>
      </div>
    </Fragment>
  );
}

import Image from "next/image";
import { useRouter } from "next/router";


const Card = (props) => {
  const router = useRouter()

  const navigateTo = () => {
    router.push("https://instagram.com/the.nirvanaexperience?igshid=MzRlODBiNWFlZA==")
  }

  return (
    <div className=" flex flex-col justify-start h-[450px] w-[300px]  bg-gray-200">
      <div className="h-1/2 w-full relative">
        <Image
          src={props.image}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="h-1/2 p-3">
        {" "}
        <h3 className="font-bold text-[50px]">T.N.E.G</h3>
        <p className="text-[26px]">-Event Organizer-</p>
        <button className="h-12 flext justify-center border-none bg-blue-900 text-white rounded-md text-lg px-8 text-bold mt-5" onClick={navigateTo}>
          See Profile
        </button>
      </div>
    </div>
  );
};

export default Card;

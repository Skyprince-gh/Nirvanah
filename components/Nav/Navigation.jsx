export default function Navbar() {
  return (
    <nav className="h-16 flex justify-center bg-black bg-opacity-60 w-full">
      <div className="flex justify-between w-[80%] items-center">
        <div className="text-[wheat]">Logo</div>
        <ul className="w-1/3 flex justify-between text-[20px] text-[wheat] ">
          <li>Home</li>
          <li>About</li>
          <li>Hightlights</li>
          <li>Socials</li>
        </ul>
      </div>
    </nav>
  );
}

import Logo from "../assets/images/ttt-logo.png";

function Navbar() {
  return (
    <div className="bg-[#111111]">
      <div className="flex justify-between items-center mx-10 p-3">

      <div>
        <ul className="flex items-center">
          <li className="pr-3 border-r-2 border-gray-400">
            <img src={Logo} alt="TTT Logo" width={34} />
          </li>
          <li className="pl-3">
            <span className="text-white">STORIES</span>
          </li>
        </ul>
      </div>

      <div>
        <button className="text-black bg-[#FEC13E] p-2 rounded-md">Courses</button>
      </div>

      </div>
    </div>
  );
}

export default Navbar;

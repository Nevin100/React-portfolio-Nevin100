import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between y-6">
      <div className="flex flex-row items-center ">
        <img className="mx-2 w-10" src={logo} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://github.com/Nevin100" target="blank">
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/nevin-bali-aa744a2b6/"
          target="blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

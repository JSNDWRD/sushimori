import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mx-4 flex items-center justify-between border-t-2 border-white/20 px-8 py-4 max-md:flex-col">
      <div>
        <h1 className="mb-2 font-kanji text-4xl lg:text-6xl">鮨森</h1>
        <p className="text-lg">&copy; 2024 Sushimori, All Rights Reserved.</p>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-2 py-4">
        <div
          onClick={() => document.getElementById("Home").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <div>Home</div>
        </div>
        <div
          onClick={() => document.getElementById("About").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <div>About</div>
        </div>
        <div
          onClick={() => document.getElementById("Menu").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <div>Menu</div>
        </div>
        <div
          onClick={() => document.getElementById("Deals").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <div>Deals</div>
        </div>
        <div
          onClick={() =>
            document.getElementById("Reservation").scrollIntoView()
          }
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <div>Reservation</div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center gap-4">
        <FaInstagram size={32} />
        <FaXTwitter size={32} />
        <FaFacebook size={32} />
        <FaBehance size={32} />
        <FaDribbble size={32} />
        <FaYoutube size={32} />
      </div>
    </footer>
  );
};

export default Footer;

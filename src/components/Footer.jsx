import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Modal from "./Modal";
import { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <footer className="mx-4 flex items-center justify-between border-t-2 border-white/20 px-8 py-4 max-md:flex-col">
      <div>
        <h1 className="mb-2 font-kanji text-4xl max-md:text-center lg:text-6xl">
          鮨森
        </h1>
        <p className="text-lg">&copy; 2024 Sushimori.</p>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-2 py-4">
        <div
          onClick={() => document.getElementById("Home").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <p className="text-center">Home</p>
        </div>
        <div
          onClick={() => document.getElementById("About").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <p className="text-center">About</p>
        </div>
        <div
          onClick={() => document.getElementById("Menu").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <p className="text-center">Menu</p>
        </div>
        <div
          onClick={() => document.getElementById("Deals").scrollIntoView()}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <p className="text-center">Deals</p>
        </div>
        <div
          onClick={() =>
            document.getElementById("Reservation").scrollIntoView()
          }
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <p className="text-center">Reservation</p>
        </div>
        <div
          onClick={handleOpenModal}
          className="cursor-pointer border-b-2 border-white border-opacity-0 transition-all hover:border-opacity-100"
        >
          <p className="text-center">Image Credit</p>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2 className="mb-4 text-xl font-bold">Image Credit Information</h2>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src="/image/cover.jpg"
              alt=""
              className="h-48 object-contain p-2"
            />{" "}
            Photo by{" "}
            <a href="https://unsplash.com/@mahmoud_fawzy100?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Mahmoud Fawzy
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/brown-and-white-bread-with-chocolate-n1DePkKznLY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
          <div>
            <img
              src="/image/covermobile.jpg"
              alt=""
              className="h-48 object-contain p-2"
            />{" "}
            Photo by{" "}
            <a href="https://unsplash.com/@tamasp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Tamas Pap
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/orange-flower-with-black-background-zali_zGDWo8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
          <div>
            <img
              src="/image/menu.jpg"
              alt=""
              className="h-48 object-contain p-2"
            />{" "}
            Photo by{" "}
            <a href="https://unsplash.com/@mahmoud_fawzy100?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Mahmoud Fawzy
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/white-and-brown-cake-on-black-surface-Wo7zARfuh_4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
          <div>
            <img
              src="/image/menu01.png"
              alt=""
              className="h-48 object-contain p-2"
            />
            <a href="https://www.vecteezy.com/png/25067612-sushi-png-with-ai-generated">
              Sushi png with AI generated. PNGs by Vecteezy
            </a>
          </div>{" "}
          <div>
            <img
              src="/image/menu02.png"
              alt=""
              className="h-48 object-contain p-2"
            />
            <a href="https://www.vecteezy.com/png/25064113-sushi-png-with-ai-generated">
              Sushi png with AI generated. PNGs by Vecteezy
            </a>
          </div>{" "}
          <div>
            <img
              src="/image/menu03.png"
              alt=""
              className="h-48 object-contain p-2"
            />
            <a href="https://www.vecteezy.com/png/25066790-sashimi-png-with-ai-generated">
              Sashimi png with AI generated PNGs by Vecteezy
            </a>
          </div>{" "}
          <div>
            <img
              src="/image/menu04.png"
              alt=""
              className="h-48 object-contain p-2"
            />
            <a href="https://www.vecteezy.com/png/27735633-sushi-platter-with-different-types-of-sushi">
              sushi platter with different types of sushi PNGs by Vecteezy
            </a>
          </div>{" "}
          <div>
            <img
              src="/image/menu05.png"
              alt=""
              className="h-48 object-contain p-2"
            />
            <a href="https://www.vecteezy.com/png/27735636-sushi-platter-with-different-types-of-sushi">
              sushi platter with different types of sushi PNGs by Vecteezy
            </a>
          </div>{" "}
          <div>
            <img
              src="/image/menu06.png"
              alt=""
              className="h-48 object-contain p-2"
            />
            <a href="https://www.vecteezy.com/png/27735645-sushi-platter-with-different-types-of-sushi">
              sushi platter with different types of sushi PNGs by Vecteezy
            </a>
          </div>{" "}
        </div>
      </Modal>
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

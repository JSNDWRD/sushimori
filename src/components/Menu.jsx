import { useState } from "react";
import menus from "../constants/menus";

const Menu = () => {
  const signatureMenus = menus.filter((menu) => menu.id <= 6);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const listMenus = menus.filter((menu) =>
    isOpen ? menu.id > 6 : menu.id > 6 && menu.id <= 18,
  );

  return (
    <section id="Menu" className="min-h-screen bg-black pb-12">
      <h1 className="pb-4 pt-10 text-center font-kanji text-6xl max-lg:text-4xl">
        メニュー
      </h1>
      <div className="h-96 w-full bg-[url('/image/menu.jpg')] bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-transparent via-transparent via-75% to-black/90 px-4">
          <div className="text-center">
            <span className="font-serif text-6xl font-semibold max-lg:text-3xl">
              New Menu
            </span>
            <h2 className="mb-4 font-kanji text-8xl ">裏巻き</h2>
            <p className="text-xl max-lg:text-base">
              with cream cheese and nuts.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="pb-1 pt-12 text-center font-serif text-4xl">
          Signature
        </h2>
        <div className="mx-auto grid w-4/5 grid-cols-3 gap-4 p-4 *:bg-black max-sm:grid-cols-1">
          {signatureMenus.map((menu) => {
            return (
              <div
                key={menu.id}
                className="flex flex-col items-center justify-center text-center"
              >
                <h2 className="font-kanji text-xl">{menu.type}</h2>
                <img
                  src={menu.image}
                  alt=""
                  className="h-4/5 w-4/5 object-contain"
                />
                <h2 className="font-kanji text-xl font-medium text-white">
                  {menu.name}
                </h2>
                <h3 className="font-kanji">&#165;{menu.price}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="pb-1 pt-12 text-center font-serif text-4xl">Menu</h2>
        <div className="mx-auto grid  w-4/5 grid-cols-3 gap-4 overflow-y-auto p-4  max-sm:grid-cols-1">
          {listMenus.map((menu) => {
            return (
              <div
                key={menu.id}
                className={` flex flex-col items-center justify-center pb-4 text-center`}
              >
                <h2 className="font-kanji text-xl">{menu.type}</h2>
                <h2 className="font-kanji text-xl font-medium text-white">
                  {menu.name}
                </h2>
                <h3 className="font-kanji">&#165;{menu.price}</h3>
              </div>
            );
          })}
          <button
            onClick={handleClick}
            className="mt-4  cursor-pointer  border border-white/20 bg-white/5 pb-3 pt-2 font-kanji text-xl font-medium sm:col-span-3"
          >
            {isOpen ? "Collapse" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

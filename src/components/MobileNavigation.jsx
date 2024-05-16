import { useEffect, useState } from "react";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div>
      <nav
        className={` fixed top-0 z-[200] flex h-14 w-full items-center justify-between bg-${isOpen ? "transparent" : "black"}  px-4 py-2 text-white  lg:hidden `}
      >
        <div className=" flex items-center">
          <h1 className="mx-4  font-kanji text-3xl">鮨森</h1>
        </div>
        <button
          onClick={handleClick}
          className="flex flex-col items-center justify-center text-white"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white
                    transition-all duration-300 ease-out ${
                      isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm
                    bg-white transition-all duration-300 ease-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white
                    transition-all duration-300 ease-out ${
                      isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                    }`}
          ></span>
        </button>
      </nav>

      <div
        className={`fixed left-0 z-50 h-screen w-full  p-4 pt-14 backdrop-blur-md transition-all lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-2xl font-medium text-white *:px-4 *:py-2">
          <li>
            <div
              onClick={() => {
                document.getElementById("Home").scrollIntoView();
                setIsOpen(false);
              }}
              className="flex cursor-pointer items-center justify-between transition-all hover:text-orange-600"
            >
              Home <div className="font-kanji">ホーム</div>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                document.getElementById("About").scrollIntoView();
                setIsOpen(false);
              }}
              className="flex cursor-pointer items-center justify-between transition-all hover:text-orange-600"
            >
              About <div className="font-kanji">会社概要</div>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                document.getElementById("Menu").scrollIntoView();
                setIsOpen(false);
              }}
              className="flex cursor-pointer items-center justify-between transition-all hover:text-orange-600"
            >
              Menu <div className="font-kanji">メニュー</div>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                document.getElementById("Deals").scrollIntoView();
                setIsOpen(false);
              }}
              className="flex cursor-pointer items-center justify-between transition-all hover:text-orange-600"
            >
              Deals <div className="font-kanji">プロモーション</div>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                document.getElementById("Reservation").scrollIntoView();
                setIsOpen(false);
              }}
              className="flex cursor-pointer items-center justify-between transition-all hover:text-orange-600"
            >
              Reservation <div className="font-kanji">予約</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavigation;

import { useEffect, useState } from "react";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop < lastScrollTop || scrollTop === 0);
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
        className={`${isVisible ? "transition-all duration-300" : "-translate-y-14 transition-all duration-300"} fixed top-0 z-[100] flex h-14 w-full items-center justify-between bg-${isOpen ? "transparent" : "black"}  px-4 py-2 text-white  lg:hidden `}
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
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="text-2xl font-medium text-white *:px-4 *:py-2">
          <li>
            <div
              onClick={() => document.getElementById("Home").scrollIntoView()}
              className="flex items-center justify-between transition-all hover:text-orange-600"
            >
              Home <div className="font-kanji">ホーム</div>
            </div>
          </li>
          <li>
            <div
              onClick={() => document.getElementById("About").scrollIntoView()}
              className="flex items-center justify-between transition-all hover:text-orange-600"
            >
              About <div className="font-kanji">会社概要</div>
            </div>
          </li>
          <li>
            <div
              onClick={() => document.getElementById("Menu").scrollIntoView()}
              className="flex items-center justify-between transition-all hover:text-orange-600"
            >
              Menu <div className="font-kanji">メニュー</div>
            </div>
          </li>
          <li>
            <div
              onClick={() => document.getElementById("Deals").scrollIntoView()}
              className="flex items-center justify-between transition-all hover:text-orange-600"
            >
              Deals <div className="font-kanji">プロモーション</div>
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                document.getElementById("Location").scrollIntoView()
              }
              className="flex items-center justify-between transition-all hover:text-orange-600"
            >
              Location <div className="font-kanji">場所</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavigation;

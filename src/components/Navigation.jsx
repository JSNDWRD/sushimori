import { useState } from "react";
import { useEffect } from "react";

const Navigation = () => {
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
    <div
      className={`fixed top-0 z-[200] flex h-24 w-full justify-center bg-black ${isVisible ? "shadow-sm shadow-slate-950/40  transition-all duration-500" : "-translate-y-24 transition-all duration-500"}  max-lg:hidden`}
    >
      <nav
        className={`flex  w-full items-center justify-between gap-4 p-2 px-8 text-white`}
      >
        <div className="font-kanji text-4xl ">鮨森</div>
        <div className="flex gap-8 text-xl *:flex *:flex-col *:items-center *:justify-center">
          <div
            onClick={() => document.getElementById("Home").scrollIntoView()}
            className="cursor-pointer border-b-2 border-white border-opacity-0 p-2 transition-all hover:border-opacity-100"
          >
            <div>Home</div>
            <div className="font-kanji text-lg">ホーム</div>
          </div>
          <div
            onClick={() => document.getElementById("About").scrollIntoView()}
            className="cursor-pointer border-b-2 border-white border-opacity-0 p-2 transition-all hover:border-opacity-100"
          >
            <div>About</div>
            <div className="font-kanji text-lg">会社概要</div>
          </div>
          <div
            onClick={() => document.getElementById("Menu").scrollIntoView()}
            className="cursor-pointer border-b-2 border-white border-opacity-0 p-2 transition-all hover:border-opacity-100"
          >
            <div>Menu</div>
            <div className="font-kanji text-lg">メニュー</div>
          </div>
          <div
            onClick={() => document.getElementById("Deals").scrollIntoView()}
            className="cursor-pointer border-b-2 border-white border-opacity-0 p-2 transition-all hover:border-opacity-100"
          >
            <div>Deals</div>
            <div className="font-kanji text-lg">プロモーション</div>
          </div>
          <div
            onClick={() =>
              document.getElementById("Reservation").scrollIntoView()
            }
            className="cursor-pointer border-b-2 border-white border-opacity-0 p-2 transition-all hover:border-opacity-100"
          >
            <div>Reservation</div>
            <div className="font-kanji text-lg">予約</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

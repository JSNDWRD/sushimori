const Navigation = () => {
  return (
    <div className="fixed top-0 flex w-full justify-center bg-gradient-to-t from-white/0 to-black ">
      <nav className="flex h-36 w-full items-center justify-between gap-4 p-2 text-white lg:flex-col">
        <div className="font-kanji text-6xl">鮨森</div>
        <div className="flex gap-12 text-xl *:flex *:flex-col *:items-center *:justify-center">
          <a href="#">
            <div>Anchor</div>
            <div className="text-lg">鮨森</div>
          </a>
          <a href="#">
            <div>Anchor</div>
            <div className="text-lg">鮨森</div>
          </a>
          <a href="#">
            <div>Anchor</div>
            <div className="text-lg">鮨森</div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

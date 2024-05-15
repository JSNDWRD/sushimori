const Hero = () => {
  return (
    <section
      id="Home"
      className="flex h-screen flex-col items-center justify-center gap-4 bg-black bg-[url('/image/covermobile.jpg')] bg-cover bg-center px-4 py-2 text-white lg:bg-[url('/image/cover.jpg')]"
    >
      <h1 className="text-center font-kanji sm:text-3xl md:text-4xl lg:text-6xl">
        鮨森, Sushi Restaurant
      </h1>
    </section>
  );
};

export default Hero;

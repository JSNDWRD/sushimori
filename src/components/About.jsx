const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col justify-center  gap-4 bg-black px-8 py-14 text-white lg:pt-24"
    >
      <h1 className="font-kanji text-8xl">鮨森</h1>
      <div className="flex gap-4 max-lg:flex-col">
        <p className="basis-full indent-8 font-sans text-2xl max-sm:text-base lg:text-justify">
          Founded in 1948, <span className="font-kanji">鮨森</span> is a
          family-owned restaurant that takes pride in its heritage and
          commitment to excellence. Our journey began with a passion for sushi
          and a desire to share the rich culture and exquisite taste of Japanese
          cuisine with our community. We strive to create an atmosphere that is
          both welcoming and sophisticated.{" "}
          <span className="max-md:hidden">
            Whether you&apos;re enjoying a casual meal with friends or
            celebrating a special occasion, our beautifully designed space and
            attentive staff will make your visit memorable. Our mission is to
            provide you with an exceptional dining experience, combining
            traditional Japanese culinary techniques with the freshest
            ingredients.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;

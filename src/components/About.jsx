const About = () => {
  return (
    <section
      id="About"
      className="flex h-screen flex-col justify-center  gap-4 bg-black px-8 py-14 text-white lg:pt-24"
    >
      <h1 className="font-kanji text-8xl">鮨森</h1>
      <div className="flex gap-4 max-lg:flex-col">
        <p className="basis-full indent-8  text-2xl max-sm:text-base lg:text-justify">
          Welcome to <span className="font-kanji">鮨森</span> (Sushi Mori),
          where tradition meets culinary excellence since 1948. Our family has
          dedicated generations to mastering the art of sushi, preserving
          authentic Japanese techniques while sourcing the finest seasonal
          ingredients from trusted partners. Each dish reflects our unwavering
          commitment to quality, from our signature nigiri to carefully curated
          omakase experiences.
          <span className="max-md:hidden">
            Our intimate dining space, adorned with handcrafted décor and soft
            lighting, provides the perfect backdrop for both special
            celebrations and refined casual dining. Let our experienced staff
            guide you through a memorable journey of flavors that has earned us
            recognition as a cornerstone of Japanese dining excellence for over
            75 years. Reservations recommended.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;

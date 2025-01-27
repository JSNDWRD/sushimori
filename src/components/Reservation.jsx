import Booking from "./Booking";

const Reservation = () => {
  return (
    <section
      id="Reservation"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <h1 className="pb-4 pt-10 text-center font-kanji text-6xl max-lg:text-4xl">
        予約
        <br />
        <span className="font-serif">Reservation</span>
      </h1>
      <Booking />
    </section>
  );
};

export default Reservation;

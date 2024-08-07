import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-start lg:text-left text-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className=" gap-10 ">
        <h1 className="top-5 sm:text-6xl text-5xl text-blue text-white lg:max-w-lg font-bold leading-[120%]">
          ¡Descubre <span className="text-customOrange">nuevos mundos </span>y
          <span className="text-customOrange"> personajes </span>
          increibles!
        </h1>{" "}
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;

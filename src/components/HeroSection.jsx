import tourist from "../assets/images/tourist.jpg";

function Hero() {
  return (
    <section className="w-full md:px-[120px] px-[16px] py-[40px] gap-[40px] md:pt-[60px] md:gap-[80px] font-sans">
      <div className="flex flex-col gap-[40px] md:flex-row md:gap-[60px] md:items-center">
        <div className="flex flex-1 flex-col">
          <h1 className="text-headline-2 md:text-headline-1 text-brown-600 text-center md:text-right">
            Stay <br className="hidden" />
            Informed,
            <br />
            Stay Inspired
          </h1>

          <p className="text-body-1 text-brown-400 text-center md:text-right mt-[16px]">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="relative mx-auto rounded-2xl overflow-hidden aspect-[386/529] max-w-[386px] w-full">
            <img
              src={tourist}
              alt="tourist"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#BEBBB1]/25" />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-[12px]">
          <span className="text-body-3 text-brown-400">— Author</span>

          <h3 className="text-headline-3 text-brown-500">Thompson P.</h3>

          <p className="text-body-1 text-brown-400">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>

          <p className="text-body-1 text-brown-400">
            When I'm not writing, I spend time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

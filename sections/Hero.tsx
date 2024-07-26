// import Link from "next/link";
// import { motion } from "framer-motion";

import { HeroHeading, HeroImage } from "@/components";
 const Hero = ( { heroUrl } ) => {
  return (
    <section
      id="home"
      className="relative z-10 h-screen w-full max-w-full overflow-hidden flex items-center justify-center py-0 pt-[40px] sm:pt-[60px] md:h-[100%] md:pb-[120px] md:pt-[120px] xl:h-screen xl:pb-[160px] xl:pt-[160px] 2xl:pb-[200px] 2xl:pt-[200px]"
    >
      <div className="container mx-auto px-2">
        <HeroHeading />
        <HeroImage HeroIMG={heroUrl} />
        <p className="mt-4 text-gray-400 text-xl font-medium tracking-tight leading-snug">
          Taking your ideas to the
          <br />
          next level using the power of <span className="font-bold text-white">AI</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

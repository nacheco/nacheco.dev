import Link from "next/link";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export const fetchHeroData = async () => {
  const heroData = await client.fetch(groq`*[_type == 'hero'][0]`, {
    next: { revalidate: 30 },
  });
  return { heroData };
};

const Hero = ( { heroUrl } ) => {
  
  const [heroData, setHeroData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const { heroData } = await fetchHeroData();
      setHeroData(heroData);
    };
    fetchData();
  }, []);
  
  
  const heroImg = "/images/hero-main.webp";

  return (
    <section
      id="home"
      className="relative z-10 h-screen w-full max-w-full overflow-hidden py-0 pt-[100px] md:h-[100%] md:pb-[120px] md:pt-[150px] xl:h-screen xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {heroUrl ? (
        <div className="absolute inset-0 -z-10">
          <video playsInline autoPlay loop muted className="h-full w-full object-cover" style={{ filter: "brightness(0.6)" }}>
            <source src={heroUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
            filter: "brightness(0.6)",
            transform: "rotate(0deg)",
          }}
        ></div>
      )}
      <motion.div className="container flex h-[75%] flex-col justify-center">
        <div className="-mx-4 mt-8 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center xl:max-w-[900px]"
              data-wow-delay=".2s"
            >
              {heroData && (
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-10 font-['Bellefair'] text-5xl uppercase leading-tight text-white sm:text-7xl sm:leading-tight md:mt-2 md:text-8xl md:leading-tight lg:text-[110px] xl:text-9xl"
                >
                  {heroData.mainHeading}
                  <span className="rounded-md bg-primary text-dark">
                    {heroData.mainHighlightHeading}
                  </span>
                </motion.h1>
              )}
              {heroData && (
                <motion.p
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="xs:text-md mb-12 text-sm font-light text-white sm:text-lg md:text-2xl"
                >
                  {heroData.subHeading}
                </motion.p>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="px-auto flex items-end justify-center gap-4 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <Link
                  href="https://www.google.com/maps/place/Bethel+Pharr.church/@26.1876599,-98.171044,17z/data=!4m15!1m8!3m7!1s0x8665a078a385996f:0x4a1df8408ffca182!2s400+S+Veterans+Blvd,+Pharr,+TX+78577!3b1!8m2!3d26.1876599!4d-98.171044!16s%2Fg%2F11hc2xk25v!3m5!1s0x8665a0785d494089:0xccdc46439ec7a970!8m2!3d26.1889005!4d-98.1685385!16s%2Fg%2F1tfr0w4t?entry=ttu"
                  target="_blank"
                  className="rounded bg-primary px-3 py-2 text-sm font-medium text-dark duration-300 ease-in-out hover:bg-primary/80 sm:text-base"
                >
                  Join in Person
                </Link>
                <Link
                  href="https://www.facebook.com/bethelpharr/"
                  target="_blank"
                  className="anim-underline-fx py-2 text-base font-medium text-lightPrimary duration-300 ease-in-out sm:text-sm"
                >
                  <span className="flex font-medium">
                    Watch Online
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="ml-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1.5 }}
      >
      </motion.div>
    </section>
  );
};

export default Hero;

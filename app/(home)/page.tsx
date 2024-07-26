import {
  Hero,
} from "@/sections";

// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

import { Footer, ScrollToTop, NavigationBar, ScrollUp } from "@/components";

const Home = async () => {

  // const heroUrl = await client.fetch(
  //   groq`*[_type == 'hero'][0].mainMedia.asset->url`,
  //   { next: { revalidate: 30 } }
  // );

  return (
    <>
      <NavigationBar />
      <Hero />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;

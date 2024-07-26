import { Hero, ProjectList } from "@/sections";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Footer, ScrollToTop, NavigationBar } from "@/components";

const Home = async () => {
  const query = groq`*[_type == 'hero'][0].mainImage.asset->url`;
  const heroUrl = await client.fetch(query, { next: { revalidate: 30 } });

  return (
    <>
      <NavigationBar />
      <main>
        <Hero heroUrl={heroUrl} />
        <ProjectList />
        <ScrollToTop />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;



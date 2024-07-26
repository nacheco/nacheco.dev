const Page = () => {
  return (
    <>
      <body className="bg-[#070511] text-white font-sans">
        <div className="container mx-auto px-4 py-8 flex flex-col justify-between min-h-screen">
          <header className="flex justify-between items-center">
            <span className="text-4xl">&infin;</span>
            <div>
              <a href="#" className="hover:text-gray-400 text-sm mr-4">ABOUT</a>
              <span className="text-gray-500 text-sm mx-2">&#x2022;</span>
              <a href="#" className="hover:text-gray-400 text-sm">PROJECTS</a>
            </div>
          </header>
      
          <main className="flex-grow flex flex-col justify-center items-center mt-16">
            <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-4">Hey There</h1>
            <p className="text-lg md:text-2xl text-gray-400">I'm Natanael Pacheco - AI Engineer</p>
            <p className="text-lg md:text-2xl text-gray-400">and SWE Fellow @ Kickstarter AI</p>
          </main>
      
          <div className="relative bg-cyan-400 w-full h-[50vh] rounded-full flex items-center justify-center">
          </div>
            <div className="mt-4">
              <p className="text-sm md:text-base leading-relaxed">Taking your ideas to the</p>
              <p className="text-sm md:text-base leading-relaxed">next level with the power of AI</p>
            </div>
      
        </div>
      </body>
    </>
  );
};

export default Page;

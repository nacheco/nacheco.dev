import React from 'react'
import ProjectHeading from './ProjectHeading'
import ToolList from './ToolList'

const ProjectCard = () => {
  return (
    <>
      <div className="bg-[#121212] text-white font-sans">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 rounded-tl-lg rounded-br-lg mx-4 my-8">
          <div className="bg-[#121212] p-8 rounded-lg flex flex-col justify-end">
            <div className="bg-[#303030] w-full h-[180px] md:h-[70%] rounded-lg p-4 relative">
              <div className="absolute inset-0 bg-transparent pattern-dots-sm text-white/20"></div>
            </div>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-lg font-medium">Android</h3>
              <p className="text-sm">Navigation</p>
            </div>
          </div>
          <div className="bg-[#F5F5F5] p-8 rounded-lg flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center w-full max-w-[200px]">
              <span className="text-gray-500 text-xl font-bold">G</span>
              <div className="bg-white rounded-full h-8 flex-grow ml-2 px-4"></div>
            </div>
            <div className="mt-4 text-gray-500 text-center md:text-left">
              <h3 className="text-lg font-medium">Android</h3>
              <p className="text-sm">Search</p>
            </div>
          </div>
          <div className="bg-[#121212] md:col-span-2 p-8 rounded-lg relative">
            <img src="https://i.imgur.com/y8Q219s.png" alt="Android Core SysUI" className="w-auto h-auto object-contain mx-auto md:mx-0" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg font-medium">Android</h3>
              <p className="text-sm">Core SysUI</p>
            </div>
          </div>
          <div className="bg-[#121212] p-8 rounded-lg flex flex-col justify-center items-center md:items-start relative">
            <img src="https://i.imgur.com/5B1N82U.png" alt="Google iOS App" className="w-auto h-auto object-contain" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg font-medium">Google</h3>
              <p className="text-sm">iOS App</p>
            </div>
          </div>
          <div className="bg-[#121212] p-8 rounded-lg flex flex-col justify-end relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-[10%] h-[10%] rounded-full bg-gray-800 opacity-50 blur-lg absolute top-[10%] left-[15%]"></div>
              <div className="w-[15%] h-[15%] rounded-full bg-gray-800 opacity-70 blur-lg absolute top-[60%] right-[20%]"></div>
              <div className="w-[8%] h-[8%] rounded-full bg-gray-800 opacity-60 blur-lg absolute bottom-[10%] left-[5%]"></div>
            </div>
            <div className="z-10 text-center md:text-left">
              <h3 className="text-lg font-medium">Google</h3>
              <p className="text-sm">Assistant</p>
            </div>
          </div>
          <div className="bg-[#121212] rounded-lg"></div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard

import React from 'react';

interface Tool {
  category: string;
  tool: string;
  color: string;
}

interface ToolListProps {
  tools: Tool[];
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => {
  return (
    <div className="text-white font-sans">
      <div className="container mx-auto px-4 py-8 md:flex md:items-center">
        <div className="md:w-2/3 pr-8">
          <h3 className="text-lg mb-4">Some of the tools used.</h3>

          <div className="grid grid-cols-2 gap-2">
            {tools.map((item, index) => (
              <div key={index} className="mb-2">
                <h4 className="text-gray-400 uppercase text-xs">{item.category}</h4>
                <div className="flex items-center mt-1">
                  <span className={`${item.color} w-3 h-3 rounded-full mr-2`}></span>
                  <span className="font-bold text-sm">{item.tool}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-2">and many more...</p>
        </div>
      </div>
    </div>
  )
}

export default ToolList

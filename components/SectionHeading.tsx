import React from "react";

const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="container">
      <span className="font-bold text-2xl">{heading}</span>
    </div>
  );
};

export default SectionHeading;

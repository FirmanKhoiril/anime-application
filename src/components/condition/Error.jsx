import React from "react";

const Error = () => {
  return (
    <div className="h-screen w-full flex justify-center flex-col items-center dark:bg-dark dark:text-white">
      <h2>Sorry</h2>
      <p>Check Connection or Maybe To Many Request 429</p>
    </div>
  );
};

export default Error;

import React from "react";
import { Radio } from "react-loader-spinner";

const Error = ({ errorMessage }) => {
  return (
    <div className="md:h-80 h-screen w-full flex justify-center flex-col items-center dark:bg-dark dark:text-white">
      <Radio visible={true} height="80" width="80" ariaLabel="radio-loading" colors={["#ef4444", "#dc2626", "#b91c1c"]} wrapperClass="radio-wrapper" />
      <h2>Sorry</h2>
      <p>
        Check Connection or <span className="text-red-500">{errorMessage} </span>{" "}
      </p>
    </div>
  );
};

export default Error;

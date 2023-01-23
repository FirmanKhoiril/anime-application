import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center space-y-2 items-center">
      <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="MagnifyingGlass-loading" wrapperStyle={{}} wrapperClass="MagnifyingGlass-wrapper" glassColor="#c0efff" color="#e15b64" />
      <h4 className="dark:text-white text-black font-bold">Sabar Geys....</h4>
      <p className="dark:text-slate-300 text-black ">Makasih Banyak Sudah Menggunjungi Website Saya</p>
    </div>
  );
};

export default Loading;

import React from "react";

export default function AllCard(): JSX.Element {
  return (
    <div className=" w-[100%] lg:w-[80%] mx-auto relative flex mb-[20px]">
      <div className="bg-slate-400 w-[60%] h-[20vh]">Img</div>
      <div className="bg-slate-300 w-[50%] h-[18vh] absolute right-0 top-[12px]">
        description
      </div>
    </div>
  );
}

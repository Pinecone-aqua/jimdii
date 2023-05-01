import React from "react";
import Logo from "./subcomp/Logo";

export default function Banner(): JSX.Element {
  return (
    <div className="py-40 pl-60">
      <Logo />
      <p className="text-3xl">Монголын анхны цахим фитнесс захиалга</p>
      <div className="py-20">
        <button className="bg-white text-black">Үйлчилгээний тухай</button>
        <button className="bg-main">Захиалах</button>
      </div>
    </div>
  );
}

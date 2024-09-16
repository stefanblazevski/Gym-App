import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="uppercase">It's time to get</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Ridiculously <span className="text-blue-400">Ripped</span>
        </h1>
      </div>

      <p className="text-small md:text-base font-light">
        <span className="text-blue-400 font-medium">Warning:</span> Side effects
        may include{" "}
        <span className="text-blue-400 font-medium">ripped muscles</span>,{" "}
        <span className="text-blue-400 font-medium">boosted confidence</span>,
        and an uncontrollable urge to flex in every mirror you pass.
      </p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text={"Accept & Begin"} />
    </div>
  );
}

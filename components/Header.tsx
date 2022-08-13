import React, { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <header className="w-full h-16 bg-slate-400 flex items-center">
      <span className="font-bold text-2xl text-stone-800 pl-10">
        Dynamic Form Builder
      </span>
    </header>
  );
};

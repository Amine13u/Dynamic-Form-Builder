import React, { PropsWithChildren } from "react";
import { FormItem } from "./FormItem";

import { IFormProp } from "../types/index";

export const Form = (props: IFormProp) => {
  return (
    <section className="h-16 bg-slate-400">
      <form className="w-full max-w-sm bg-slate-300 p-5 drop-shadow-md rounded-2xl"></form>
    </section>
  );
};

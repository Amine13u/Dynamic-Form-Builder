import React, { FunctionComponent } from "react";
import { FormField } from "./FormField";

export const FormFields: FunctionComponent = () => {
  return (
    <section className="flex flex-col space-y-3">
      {[1, 2, 3].map((field, i) => (
        <FormField key={i} />
      ))}
    </section>
  );
};

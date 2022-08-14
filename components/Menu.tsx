import React, { FunctionComponent } from "react";

export const Menu: FunctionComponent = () => {
  const fields: string[] = [
    "Text Field",
    "Text Area",
    "Chekbox",
    "Select Input",
    "Radio Button",
    "Email",
    "Password",
    "Number",
    "Date",
    "Button",
  ];

  return (
    <nav className="mt-10 ml-10">
      <ul className="flex flex-col space-y-5">
        {fields.map((field, i) => (
          <li
            key={i}
            className="font-semibold text-lg cursor-pointer hover:text-neutral-500"
          >
            {field}
          </li>
        ))}
      </ul>
    </nav>
  );
};

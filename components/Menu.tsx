import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFormField, selectForm } from "../slices/formSlice";
import { FormItem } from "./FormItem";

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

  const form = useSelector(selectForm);
  const dispatch = useDispatch();

  const handleClick = () => {};

  return (
    <nav className="mt-10 ml-10">
      <ul className="flex flex-col space-y-5">
        {fields.map((field, i) => (
          <li
            key={i}
            className="font-semibold text-lg cursor-pointer hover:text-neutral-500"
            onClick={() => handleClick()}
          >
            {field}
          </li>
        ))}
      </ul>
    </nav>
  );
};

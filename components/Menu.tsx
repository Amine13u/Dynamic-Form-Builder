import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { addFormField } from "../slices/formSlice";

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
  ];

  const dispatch = useDispatch();

  const handleClick = (field: string) => {
    switch (field) {
      case "Text Field":
        dispatch(
          addFormField({
            type: "text",
            name: "",
            label: "Label",
            required: false,
            placeholder: "",
          })
        );
        break;
      case "Text Area":
        dispatch(
          addFormField({
            fieldType: "textarea",
            type: "text",
            name: "",
            label: "Label",
            required: false,
            placeholder: "",
          })
        );
        break;
      case "Chekbox":
        dispatch(
          addFormField({
            type: "checkbox",
            label: "Label",
            name: "",
            options: [
              {
                option: "",
                value: "",
                checked: false,
              },
            ],
          })
        );
        break;
      case "Select Input":
        dispatch(
          addFormField({
            type: "select",
            label: "Label",
            name: "",
            options: [
              {
                option: "",
                value: "",
                checked: false,
              },
            ],
          })
        );
        break;
      case "Radio Button":
        dispatch(
          addFormField({
            type: "radio",
            label: "Label",
            name: "",
            options: [
              {
                option: "",
                value: "",
                checked: false,
              },
            ],
          })
        );
        break;
      case "Email":
        dispatch(
          addFormField({
            type: "email",
            name: "",
            label: "Label",
            required: false,
            placeholder: "",
          })
        );
        break;
      case "Password":
        dispatch(
          addFormField({
            type: "password",
            name: "",
            label: "Label",
            required: false,
            placeholder: "",
          })
        );
        break;
      case "Number":
        dispatch(
          addFormField({
            type: "number",
            name: "",
            label: "Label",
            required: false,
            placeholder: "",
          })
        );
        break;
      case "Date":
        dispatch(
          addFormField({
            fieldType: "date",
            type: "date",
            name: "",
            label: "Label",
            required: false,
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <nav className="mt-10 ml-10">
      <ul className="flex flex-col space-y-5">
        {fields.map((field, i) => (
          <li
            key={i}
            className="font-semibold text-lg cursor-pointer hover:text-neutral-500"
            onClick={() => handleClick(field)}
          >
            {field}
          </li>
        ))}
      </ul>
    </nav>
  );
};

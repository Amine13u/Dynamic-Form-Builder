import React from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../slices/formSlice";

export const Form = () => {
  const form = useSelector(selectForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {form.map((item, i) => (
        <div key={i} className="h-16 bg-slate-400">
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type={item.type}
            id={item.name}
            name={item.name}
            placeholder={item.placeholder}
            required={item.required}
          />
        </div>
      ))}
    </form>
  );
};

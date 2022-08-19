import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../slices/formSlice";
import { IFormItem, IFormRule } from "../types";

const isValueTruthy = (value: string | string[] | null): boolean => {
  if (!value) {
    return false;
  } else if (typeof value === "string") {
    return Boolean(value.trim());
  } else {
    return !!value.length;
  }
};

const formRules = (form: IFormItem[], prevForm: Record<string, any>) =>
  form.reduce((acc: Record<string, any>, curr: IFormItem) => {
    acc[curr.name] = {
      value: prevForm[curr.name]?.value || null,
      required: curr.required,
      error: acc[curr.name]?.error || false,
    };
    return acc;
  }, {} as IFormRule);

export const Form = () => {
  const form = useSelector(selectForm);
  const [testForm, setTestForm] = useState<Record<string, IFormRule>>({});

  useEffect(() => {
    setTestForm((prevForm) => formRules(form, prevForm));
  }, [form]);

  const handleOptionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestForm((prevForm) => {
      const prevOptions = prevForm[e.target.name].value;
      let newOptions: string | string[] | null = null;

      if (!prevOptions) {
        newOptions = [e.target.value];
      } else if (
        Array.isArray(prevOptions) &&
        prevOptions.includes(e.target.value)
      ) {
        newOptions = prevOptions.filter(
          (currVal) => currVal !== e.target.value
        );
      } else if (
        Array.isArray(prevOptions) &&
        !prevOptions.includes(e.target.value)
      ) {
        newOptions = [...prevOptions, e.target.value];
      }

      return {
        ...prevForm,
        [e.target.name]: { ...prevForm[e.target.name], value: newOptions },
      };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: { ...prevForm[e.target.name], value: e.target.value },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const entries = Object.entries(testForm);
    const submitedTestForm = entries.map(([fieldNmae, { value, required }]) => [
      fieldNmae,
      {
        value,
        required,
        error: required && !isValueTruthy(value),
      },
    ]);
    setTestForm(Object.fromEntries(submitedTestForm));
  };

  if (form.length === 0) return <div></div>;

  return (
    <form
      className="w-full max-w-md bg-slate-300 p-5 drop-shadow-md rounded-2xl mt-5"
      onSubmit={handleSubmit}
    >
      {form.map((item, i) => (
        <div key={i} className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              htmlFor={item.name}
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              {item.label}
            </label>
          </div>
          <div className="md:w-2/3">
            {item.fieldType === "Text Area" ? (
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id={item.name}
                name={item.name}
                placeholder={item.placeholder}
                required={item.required}
              />
            ) : item.type === "checkbox" || item.type === "radio" ? (
              <>
                {item.options?.map((opt, i) => (
                  <div key={i} className="flex items-center my-1">
                    <input
                      onChange={
                        item.type !== "checkbox"
                          ? handleChange
                          : handleOptionsChange
                      }
                      className="w-4 h-4 mr-5"
                      type={item.type}
                      id={opt.option}
                      value={opt.value}
                      name={item.name}
                      required={
                        item.type !== "checkbox" && i === 0 && item.required
                      }
                    />
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor={opt.option}
                      style={testForm[item.name]?.error ? { color: "red" } : {}}
                    >
                      {opt.option}
                    </label>
                    <br />
                  </div>
                ))}
              </>
            ) : item.type === "select" ? (
              <select
                name={item.name}
                id={item.type}
                required={item.required}
                className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              >
                {item.options?.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                onChange={handleChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                style={
                  testForm[item.name] && testForm[item.name].error
                    ? { border: "2px solid red" }
                    : {}
                }
                type={item.type}
                id={item.name}
                name={item.name}
                placeholder={item.placeholder}
                required={item.required}
              />
            )}
          </div>
        </div>
      ))}

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectForm,
  updateFormField,
  deleteFormField,
  updateOption,
  addOption,
  removeOptionByIndex,
} from "../slices/formSlice";
import { IFormItem, IOption } from "../types";

export const FormFields: FunctionComponent = () => {
  const form = useSelector<any, IFormItem[]>(selectForm);
  const dispatch = useDispatch();

  const updateOptionFields = (
    e: React.ChangeEvent<HTMLInputElement>,
    opt: IOption,
    optionIndex: number,
    itemIndex: number
  ) => {
    const updatedOption = {
      ...opt,
      [e.target.id]: e.target.value,
    };
    dispatch(
      updateOption({
        updatedOption,
        optionIndex,
        itemIndex,
      })
    );
  };

  return (
    <>
      {form.map((item, i) => (
        <form
          key={i}
          className="w-full max-w-md bg-slate-300 p-5 drop-shadow-md rounded-2xl my-5"
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Label"
              >
                Label
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="label"
                type="text"
                value={item.label}
                onChange={(e) => {
                  dispatch(
                    updateFormField({
                      updatedField: { ...item, [e.target.id]: e.target.value },
                      index: i,
                    })
                  );
                }}
              />
            </div>
          </div>
          {!(
            item.fieldType === "date" ||
            item.type === "checkbox" ||
            item.type === "select" ||
            item.type === "radio"
          ) && (
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="placeholder"
                >
                  Placeholder
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="placeholder"
                  type="text"
                  placeholder="placeholder"
                  value={item.placeholder}
                  onChange={(e) => {
                    dispatch(
                      updateFormField({
                        updatedField: {
                          ...item,
                          [e.target.id]: e.target.value,
                        },
                        index: i,
                      })
                    );
                  }}
                />
              </div>
            </div>
          )}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="type"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                name="name"
                placeholder="Name"
                value={item.name}
                onChange={(e) => {
                  dispatch(
                    updateFormField({
                      updatedField: { ...item, [e.target.id]: e.target.value },
                      index: i,
                    })
                  );
                }}
              />
            </div>
          </div>
          {["select", "checkbox", "radio"].includes(item.type) &&
            item.options!.map((opt, optIndex) => (
              <div key={optIndex} className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <input
                    onChange={(e) => {
                      updateOptionFields(e, opt, optIndex, i);
                    }}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="option"
                    value={opt.option}
                    name="name"
                    placeholder="Option"
                  />
                </div>
                <div className="md:w-1/6"></div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="value"
                    value={opt.value}
                    name="name"
                    placeholder="Value"
                    onChange={(e) => {
                      updateOptionFields(e, opt, optIndex, i);
                    }}
                  />
                </div>
                <div className="md:flex md:items-center">
                  <div
                    onClick={() =>
                      dispatch(
                        addOption({
                          newOption: { value: "", option: "", checked: false },
                          index: i,
                        })
                      )
                    }
                    className="md:w-1/6 ml-10 text-2xl font-bold text-purple-500 hover:text-purple-400 cursor-pointer"
                  >
                    +
                  </div>
                  {item.options?.length! > 1 && (
                    <div
                      onClick={() =>
                        dispatch(
                          removeOptionByIndex({
                            itemIndex: i,
                            optionIndex: optIndex,
                          })
                        )
                      }
                      className="md:w-1/6 ml-10 text-xl font-bold text-purple-500 hover:text-purple-400 cursor-pointer"
                    >
                      x
                    </div>
                  )}
                </div>
              </div>
            ))}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                onChange={(e) => {
                  dispatch(
                    updateFormField({
                      updatedField: { ...item, required: e.target.checked },
                      index: i,
                    })
                  );
                }}
              />
              <span className="text-sm">Required</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={(e) => {
                  dispatch(
                    deleteFormField({
                      field: item,
                      index: i,
                    })
                  );
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      ))}
    </>
  );
};

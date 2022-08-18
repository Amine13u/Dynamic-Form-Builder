import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IFormItem, IOption } from "../types/index";

export interface FormState {
  formFields: IFormItem[];
}

const initialState: FormState = {
  formFields: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormField: (state, action: PayloadAction<IFormItem>) => {
      state.formFields = [...state.formFields, action.payload];
    },
    updateFormField: (
      state,
      action: PayloadAction<{ updatedField: IFormItem; index: number }>
    ) => {
      state.formFields = state.formFields.map((field, i) =>
        action.payload.index === i ? action.payload.updatedField : field
      );
    },
    deleteFormField: (
      state,
      action: PayloadAction<{ field: IFormItem; index: number }>
    ) => {
      state.formFields = state.formFields.filter(
        (_, i) => action.payload.index !== i
      );
    },
    addOption: (
      state,
      action: PayloadAction<{ newOption: IOption; index: number }>
    ) => {
      state.formFields = state.formFields.map((field, i) =>
        action.payload.index === i
          ? { ...field, options: [...field.options!, action.payload.newOption] }
          : field
      );
    },
    removeOptionByIndex: (
      state,
      action: PayloadAction<{
        itemIndex: number;
        optionIndex: number;
      }>
    ) => {
      state.formFields = state.formFields.map((field, i) =>
        action.payload.itemIndex === i
          ? {
              ...field,
              options: field.options!.filter(
                (_, j) => j !== action.payload.optionIndex
              ),
            }
          : field
      );
    },
    updateOption: (
      state,
      action: PayloadAction<{
        updatedOption: IOption;
        optionIndex: number;
        itemIndex: number;
      }>
    ) => {
      const editOption = (item: IFormItem) => {
        const editedOptions = item.options?.map((opt, i) =>
          i === action.payload.optionIndex
            ? { ...opt, ...action.payload.updatedOption }
            : opt
        );
        return { ...item, options: editedOptions };
      };

      state.formFields = state.formFields.map((field, i) =>
        action.payload.itemIndex === i ? editOption(field) : field
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addFormField,
  updateFormField,
  deleteFormField,
  updateOption,
  addOption,
  removeOptionByIndex,
} = formSlice.actions;

// Form Selector
export const selectForm = (state: RootState) => state.form.formFields;

export default formSlice.reducer;

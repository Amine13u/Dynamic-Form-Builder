import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IFormItem } from "../types/index";

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
        (field, i) => action.payload.index !== i
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFormField, updateFormField, deleteFormField } =
  formSlice.actions;

// Form Selector
export const selectForm = (state: RootState) => state.form.formFields;

export default formSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IFormItem } from "../types/index";

export interface FormState {
  formFields: IFormItem[];
}

const initialState: FormState = {
  formFields: [
    {
      type: "text",
      name: "full-name",
      id: "1",
      label: "Full Name",
    },
    {
      type: "text",
      name: "password",
      id: "2",
      label: "Password",
    },
  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormField: (state, action: PayloadAction<IFormItem>) => {
      state.formFields = [...state.formFields, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFormField } = formSlice.actions;

// Form Selector
export const selectForm = (state: RootState) => state.form.formFields;

export default formSlice.reducer;

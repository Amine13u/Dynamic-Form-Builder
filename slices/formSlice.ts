import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface FormState {
  formFields: object[];
}

const initialState: FormState = {
  formFields: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormField: (state, action: PayloadAction<object>) => {
      state.formFields = [...state.formFields, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFormField } = formSlice.actions;

// Form Selector
export const selectForm = (state: RootState) => state.form.formFields;

export default formSlice.reducer;

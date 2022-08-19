export interface IOption {
  option: string;
  value: string;
  checked?: boolean;
}

export interface IFormItem {
  fieldType?: string;
  type: string;
  id?: string | number;
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  options?: IOption[];
}

export interface IFormProp {
  form: Partial<IFormItem>[];
}

export interface IFormRule {
  value: string | string[] | null;
  required: boolean;
  error: boolean;
}

interface IOption {
  option: string;
  value: string;
}

interface IRadio {
  option: string;
  value: string;
  checked: boolean;
}

export interface IFormItem {
  type: string;
  id?: string | number;
  label: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  options?: IOption[];
  radio?: IRadio[];
}

export interface IFormProp {
  form: Partial<IFormItem>[];
}

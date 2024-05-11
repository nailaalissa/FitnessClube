export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  disableButton?: boolean;
  title?: string;
  text?: string;
  input1?: string;
  input2?: string;
  gender?: string;
  input3?: string;
  activity?: string;
  children?: React.ReactNode;
}
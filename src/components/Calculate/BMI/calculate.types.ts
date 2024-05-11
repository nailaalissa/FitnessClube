export interface BmiProps {
  weight: number;
  height: number;
  age: number;
}

export interface BmiResponse{
  status_code?: number,
  request_result?: string,
  data: BmiResult

}
export interface BmiResult{
  bmi: number;
  health:string
  healthy_bmi_range: string;
}

export interface Bmr extends BmiProps {
  gender: string;
}


export interface BmrProps{
    height: number,
   weight: number,
   age: number,
   gender: string,
    activitylevel: string
}



export interface DailyCalorieResponse {
  BMR: number;
  goals: {
    "maintain weight": number;
    "Mild weight loss": {
      "loss weight": string;
      calory: number;
    };
    "Weight loss": {
      "loss weight": string;
      calory: number;
    };
    "Extreme weight loss": {
      "loss weight": string;
      calory: number;
    };
    "Mild weight gain": {
      "gain weight": string;
      calory: number;
    };
    "Weight gain": {
      "gain weight": string;
      calory: number;
    };
    "Extreme weight gain": {
      "gain weight": string;
      calory: number;
    };
  };
}
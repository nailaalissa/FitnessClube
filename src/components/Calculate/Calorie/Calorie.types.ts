export interface BmrProps{
    height: number,
   weight: number,
   age: number,
   gender: string,
    activitylevel: string
}


export interface DailyCalorieResponse {
  BMR: number;
  dailyCalorieRequirement: number;
  goals: {
    maintainWeight: number;
    mildWeightLoss: number;
    weightLoss: number;
    extremeWeightLoss: number;
    mildWeightGain: number;
    weightGain: number;
    extremeWeightGain: number;
  };
}


export interface Exercise {
  id?: string ;
  name: string;
  gifUrl: string;
  bodyPart: string;
  target: string;
  instructions?: string[];
}
export interface ExerciseDetail {
  id?: string
  bodyPart: string,
  equipment: string,
  gifUrl: string,
  name: string,
  target: string,
  secondaryMuscles: string[],
  instructions: string[]
}

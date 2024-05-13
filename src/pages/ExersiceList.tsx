// import { useState, useMemo } from "react";
// import ExerciseCard from "../components/Exercise/ExerciseDetail/ExerciseCard";
// import { Exercise } from "../components/Exercise/ExerciseDetail/exerciseTypes.types";
// import '../components/Exercise/exercise.css';
// import useFetch from "../components/hooks/use-fetch";
// import Htext from "../components/shared/Htext";

// export default function ExerciseList() {
//   const [search, setSearch] = useState<string>(''); // Set initial search state to an empty string
//   const [searchExercise, setSearchExercise] = useState<boolean>(false);
//   const { data, isLoading, isError, error } = useFetch<Exercise[]>(
//     `https://exercisedb.p.rapidapi.com/exercises?limit=40`,
//     import.meta.env.VITE_APP_RAPID_API_KEY,
//     import.meta.env.VITE_APP_RAPID_HOST_EXERCISES
//   );

//   // Memoize filtered exercises based on search input
//   const filteredExercises = useMemo(() => {
//     if (!search) {
//       return data || [];
//     }

//     const lowerCaseSearch = search.toLowerCase();
//     return (data || []).filter(exercise =>
//       exercise.name.toLowerCase().includes(lowerCaseSearch) ||
//       exercise.target.toLowerCase().includes(lowerCaseSearch) ||
//       exercise.bodyPart.toLowerCase().includes(lowerCaseSearch)
//     );
//   }, [search, data]);

//   const handleSearch = () => {
//     setSearchExercise(true);
//   };

//   return (
//     <div style={{ marginTop: '6rem', marginBottom: '4rem' }}>
//       <Htext> All Exercises </Htext>
//       <div className="exercise-List">
//         {isLoading && <p>Loading...</p>}
//         {isError && <p>{error?.message}</p>}
//         <div>
//           <h3> You can filter exercises by Name, BodyPart, or Target </h3>
//         </div>
//         <div className="search-container">
//           <div className="input-container">
//             <input
//               className="input-field"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search Exercises"
//               type="text"
//             />
//             <button className="search-btn" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//           <div className="scrollbar-container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//             {searchExercise ? (
//               filteredExercises.length > 0 ? (
//                 filteredExercises.map((exercise: Exercise) => (
//                   <div key={exercise.id}>
//                     <ExerciseCard
//                       name={exercise.name}
//                       gifUrl={exercise.gifUrl}
//                       bodyPart={exercise.bodyPart}
//                       target={exercise.target}
//                       id={exercise.id}
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <p>No exercises found.</p>
//               )
//             ) : (
//               data && data.map(item => (
//                 <ExerciseCard
//                   key={item.id}
//                   name={item.name}
//                   gifUrl={item.gifUrl}
//                   bodyPart={item.bodyPart}
//                   target={item.target}
//                   id={item.id}
//                 />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import ExerciseCard from "../components/Exercise/ExerciseDetail/ExerciseCard";
import { Exercise } from "../components/Exercise/ExerciseDetail/exerciseTypes.types";
import '../components/Exercise/exercise.css'
import useFetch from "../components/hooks/use-fetch";
import Htext from "../components/shared/Htext"




export default function ExerciseList() {
  const { data, isLoading, isError, error } = useFetch<Exercise[]>(
		`https://exercisedb.p.rapidapi.com/exercises?limit=40`,import.meta.env.VITE_APP_RAPID_API_KEY,import.meta.env.VITE_APP_RAPID_HOST_EXERCISES
	);

  return (
    <div style={ {marginTop:'6rem',marginBottom:'4rem'}}>
    <Htext> all Exercises </Htext>
    <div className="exersice-List">
     
      {isLoading && <p>Loading...</p>}
			{isError && <p>{error?.message}</p>}
      {data && data.map(item => (
          <ExerciseCard key={item.id} name={item.name} gifUrl={item.gifUrl} bodyPart={item.bodyPart} target={item.target} id={ item.id} />
      ))}
      </div>
      </div>
  );
}


  
 
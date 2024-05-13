// import { useState, useMemo } from "react";
// import { Exercise } from '../ExerciseDetail/exerciseTypes.types';
// import useFetch from '../../hooks/use-fetch';
// import ExerciseCard from "../ExerciseDetail";

// export default function SearchExercise() {
//   const [search, setSearch] = useState<string>('');
//   const [notfound, setNotfound] = useState<boolean>(false);
//   const [searchExercise, setSearchExercise] = useState<boolean>(false)
//   const { data } = useFetch<Exercise[]>(
//     `https://exercisedb.p.rapidapi.com/exercises?limit=30`,
//     import.meta.env.VITE_APP_RAPID_API_KEY,
//     import.meta.env.VITE_APP_RAPID_HOST_EXERCISES
//   );

//   const filteredExercises = useMemo(() => {
//     // if (!search) return [];
//     // return (data || []).filter(exercise =>
//     //   exercise.name.toLowerCase().includes(search.toLowerCase() ) ||  exercise.bodyPart.toLowerCase().includes(search.toLowerCase()))
//     if (search) {
   

//       return (
    
//         data || []).filter(
//         (item) => item.name.toLowerCase().includes(search)
//           || item.target.toLowerCase().includes(search)
//           || item.bodyPart.toLowerCase().includes(search),
//       )
//     }
//     else {
//       setNotfound(true);
//       return [];
//     }
//   }, [search, data]);

//   const handleSearch = () => {
//     setSearchExercise(true);
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <h1 className="heading">Awesome Exercises You Should Know</h1>
//         <div className="input-container">
//           <input
//             className="input-field"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search Exercises"
//             type="text"
//           />
//           <button className="search-btn" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//         <div className="scrollbar-container">
//           {searchExercise && (
//             filteredExercises.length > 0 ? (
//               filteredExercises.map(exercise => (
//                 <ExerciseCard key={exercise.id} name={exercise.name} gifUrl={exercise.gifUrl} bodyPart={exercise.bodyPart} target={exercise.target} id={exercise.id} />
//               ))
//             ) : (
                
//                 <p> { notfound ? <h1> there is no found Exersice</h1> : ''}</p>
//             )
            
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { Exercise } from '../ExerciseDetail/exerciseTypes.types';

import { useState, useMemo } from "react";
import useFetch from '../../hooks/use-fetch';
import ExerciseCard from "../ExerciseDetail";


export default function SearchExercise() {
  const [search, setSearch] = useState<string>('');
  const [notFound, setNotFound] = useState<boolean>(false);
  const [searchExercise, setSearchExercise] = useState<boolean>(false);
  const { data } = useFetch<Exercise[]>(
    `https://exercisedb.p.rapidapi.com/exercises?limit=30`,
    import.meta.env.VITE_APP_RAPID_API_KEY,
    import.meta.env.VITE_APP_RAPID_HOST_EXERCISES
  );

  const filteredExercises = useMemo(() => {
    if (!search) {
      setNotFound(false); // Reset notFound state when search is empty
      return [];
    }

    const lowerCaseSearch = search.toLowerCase();
    const filtered = (data || []).filter(exercise =>
      exercise.name.toLowerCase().includes(lowerCaseSearch) ||
      exercise.target.toLowerCase().includes(lowerCaseSearch) ||
      exercise.bodyPart.toLowerCase().includes(lowerCaseSearch)
    );

    if (filtered.length === 0) {
      setNotFound(true); // Set notFound state if no results found
    } else {
      setNotFound(false); // Reset notFound state if results found
    }

    return filtered;
  }, [search, data]);

  const handleSearch = () => {
    setSearchExercise(true);
  };

  return (
    <div >
      <div className="search-container">

        <div className="input-container">
          <input
            className="input-field"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Exercises"
            type="text"
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="scrollbar-container">
        
                  
          {searchExercise && (
            filteredExercises.length > 0 ? (
              filteredExercises.map(exercise => (
                <ExerciseCard key={exercise.id} name={exercise.name} gifUrl={exercise.gifUrl} bodyPart={exercise.bodyPart} target={exercise.target} id={exercise.id} />
                 ))
            ) : (
              notFound && <p>No exercises found.</p>
            )
              )}
              
        
      
        </div>
      </div>
    </div>
  );
}

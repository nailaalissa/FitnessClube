// import React, { useEffect, useState } from 'react';
// // import HorizontalScrollbar from './HorizontalScrollbar';
// import './style.css';

// import { exercise } from "../../utils/exercise.type";


// interface Props {
//   setExercises: React.Dispatch<React.SetStateAction<exercise[]>>;
//   bodyPart: string;
//   setBodyPart: React.Dispatch<React.SetStateAction<string>>;
// }

// const SearchExercises = ({ setExercises, bodyPart, setBodyPart }:Props) => {
//   const [search, setSearch] = useState<string>('');
//   // const [bodyParts, setBodyParts] = useState<string[]>([]);
//   const [exercise, setExercise] = useState<exercise[]>([]);
//   useEffect(  () => {
//      fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions).then((data) => setExercise(data));
//   }, []);

//   const handleSearch = async () => {
//     if (search) {
//       console.log(exercise);
//     }
//   };

//   return (
//     <div className="search-container">
//       <h1 className="heading">Awesome Exercises You Should Know</h1>
//       <div className="input-container">
//         <input
//           className="input-field"
//           value={search}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <button className="search-btn" onClick={handleSearch}>
//           Search
//         </button>
//       </div>
//       <div className="scrollbar-container">
        
//         {/* <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
//       </div>
//     </div>
//   );
// };

// export default SearchExercises;

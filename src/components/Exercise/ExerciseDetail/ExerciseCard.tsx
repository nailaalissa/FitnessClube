// import { Exercise } from "./exerciseTypes.types"
// import { Link } from 'react-router-dom';
// import '../exercise.css'
// import Htext from "../../shared/Htext";
// // import { useFavoriteExercise } from '../../hooks/FavoriteExerciseContext';



// export default function ExerciseCard({ name, gifUrl, bodyPart, target, id }: Exercise) {

//   // const { addToFavorites, favoriteExercises } = useFavoriteExercise();

//   // const handleAddToFavorites = () => {
//   //   addToFavorites({ id, name, gifUrl, bodyPart, target });
//   // };

//   // const isFavorite = favoriteExercises.some((exercise) => exercise.id === id);


//   return (
    
//      <Link className="exercise-link" to={`/exercise/${id}`}>
//        <div className="exercise-card ">
//         <img src={gifUrl} alt={name} />
//         <Htext className="text"> {name}</Htext>
//         {/* <button onClick={handleAddToFavorites}>
//         {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//       </button> */}
//         <div className="buttons">
//           <p className="group1" > {bodyPart} </p>
//           <p className="group2" > {target} </p>
//           </div>
//           </div>
//       </Link>
      
     
//   )
// }

// In ExerciseCard.tsx

// ExerciseCard.tsx
 import { Exercise } from "./exerciseTypes.types"
import { Link } from 'react-router-dom';
import '../exercise.css'
import Htext from "../../shared/Htext";
import { useFavoriteExercise } from '../../hooks/FavoriteExerciseContext';



export default function ExerciseCard({ name, gifUrl, bodyPart, target, id }: Exercise) {
 
  const { addToFavorites, favoriteExercises, removeFromFavorites } = useFavoriteExercise();
  const isFavorite = favoriteExercises.some((exercise) => exercise.id === id);

  const handleAddToFavorites = () => {
    if (isFavorite) {
      if (id) {
        removeFromFavorites(id);
      }
    } else {
      addToFavorites({ id, name, gifUrl, bodyPart, target }); // Add to favorites if not favorited
    }
  };



  return (
    <div className="exercise-link">
   
      <div >
        <div className="favorit-card">
          <span className={isFavorite ? 'remove' : 'add'} onClick={handleAddToFavorites} >❤</span> 
        </div>
        <div className="exercise-card">
      <Link  to={`/exercise/${id}`}>
        <img src={gifUrl} alt={name} />  </Link>
        <Link  to={`/exercise/${id}`} style={{textDecoration:'none'}}>  <Htext className="text"> {name}</Htext></Link>
     
        <div className="buttons">
          <p className="group1">{bodyPart}</p>
          <p className="group2">{target}</p>
        </div>
      </div>
      </div>
      </div>
  );
}

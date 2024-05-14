
import  { useMemo } from 'react';
import ExerciseCard from '../components/Exercise/ExerciseDetail/ExerciseCard';
import { Exercise } from '../components/Exercise/ExerciseDetail/exerciseTypes.types';
import useFetch from '../components/hooks/use-fetch';
import Htext from '../components/shared/Htext';
 import usePagination from '../components/hooks/usePagination';

export default function ExerciseList() {
  const { data, isLoading, isError, error } = useFetch<Exercise[]>(
    `https://exercisedb.p.rapidapi.com/exercises?limit=80`,
    '8a693a8e53mshe7579073abe3371p10e94bjsnc1d0e7a6b7fe',
    'exercisedb.p.rapidapi.com'
  );

  // Pagination setup
  const totalPages = data ? Math.ceil(data.length / 10) : 1; 
  const { cursor,setCursor} = usePagination({ totalPages });
  function getItemsPerPage() {
    if (window.innerWidth < 820) return 8
   else return 9; 
  }
  // Pagination logic
  const itemsPerPage = getItemsPerPage();
  const startIndex = cursor * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = useMemo(() => {
    return data ? data.slice(startIndex, endIndex) : [];
  }, [data, startIndex, endIndex]);
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => setCursor(i - 1)} className={cursor === i - 1 ? 'active' : 'pageNmuber'}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  return (
    <div style={{ marginTop: '6rem', marginBottom: '4rem' }}>
      <Htext>All Exercises</Htext>
      <div className="exercise-List">
        {isLoading && <p>Loading...</p>}
        {isError && !data && (
          <p style={{ textAlign: 'center', margin: '3rem', fontSize: '1.3rem', color: 'red' }}>
            error... No data available ...{error?.message}
          </p>
        )}
     <div className="exersice-List">
        {paginatedData.map(item => (
          <ExerciseCard
            key={item.id}
            name={item.name}
            gifUrl={item.gifUrl}
            bodyPart={item.bodyPart}
            target={item.target}
            id={item.id}
          />
        ))}
</div>
            <div className="pagination">
          <button className="pagination-btn" onClick={() => setCursor(cursor - 1)} disabled={cursor === 0}>
            Prev
          </button>
          {renderPageNumbers()}
          <button className="pagination-btn" onClick={() => setCursor(cursor + 1)} disabled={cursor === totalPages - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

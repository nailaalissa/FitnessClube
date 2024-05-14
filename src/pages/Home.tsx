
import SearchExercise from "../components/Exercise/SearchExercise/SearchExercise";
import Benefit from "../components/HomeComponents/benefit/Benefit"
import HeroBanner from "../components/HomeComponents/HeroBanner"
import {  useMemo } from 'react';
import Htext from "../components/shared/Htext";


export default function Home() {

  const Search_Component = useMemo(() => <SearchExercise />, []);

  return (
    <div>
    
      <HeroBanner />
     
      < Benefit />
      <div style={{marginTop:'4rem'}}>
      <Htext>Awesome Exercises You Should Know</Htext>
        {Search_Component}
        </div>
    </div>
  )
}

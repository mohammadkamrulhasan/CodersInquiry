import React from 'react';
import { useParams } from 'react-router-dom';
import JS from './JavaScript/JS';
import Python from './Python/Python';
import ReactJs from './ReactJs/ReactJs';



const CourseDetails = () => {
  const {courseId} = useParams();
   
const courseComponent = () => {
  if(courseId === 1){
    return (<JS/>)
  }
  else if(courseId === 2){
    return (<Python/>)
  }

  else if(courseId === 3){
    return (<ReactJs/>)
  }
}
    return (
        <main className="d-flex flex-direction-column h-100 p-1">
         <div>
         {
            /*coming soon after fill up all */
          }
         </div>
          
        </main>
    );
};

export default CourseDetails;
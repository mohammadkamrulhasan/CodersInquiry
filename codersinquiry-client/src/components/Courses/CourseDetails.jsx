import React from 'react';
import { useParams } from 'react-router-dom';
import JS from './JavaScript/JS';



const CourseDetails = () => {
  const {courseId} = useParams();
   
const courseComponent = () => {
  if(courseId === '1'){
    return (<JS/>)
  }
  else if(courseId === '2'){
    return 
  }
}

const handleClick = () => {

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
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddCoursesData = () => {
    const { register, handleSubmit } = useForm()
   const [addCourseContent, setAddCourseContent] = useState({})
  

    const handleBlur = (event) => {
        console.log(event.target.value);
        const newCourse = {...addCourseContent}
        newCourse[event.target.name] = event.target.value;
        setAddCourseContent(newCourse);
   
    }
const handleSubmit = (event) => {
 console.log(event);

}

    return (
     <div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 shadow-md">
        <textarea rows="3" type="text" name="title"  handleBlur={handleBlur}  className=" w-96 p-2" placeholder="Heading*"/> <br/>
        <input  type="number" name="price"  handleBlur={handleBlur} className=" w-96  p-2" placeholder="Code *"/> <br/>
        <input type="text" name="weight" handleBlur={handleBlur} className=" w-96 border  mb-2 p-2" placeholder="Details *"/> <br/>
        <textarea rows="8" type="text" name="extra"  handleBlur={handleBlur} className="w-96 p-2" placeholder="Extra*"/><br/>
        <input type="submit" className="mt-5 "/>
     </form>
    </div>
    );
};

export default AddCoursesData;
import React from 'react';
import js from '../../images/js.png'
import python from '../../images/python.png'
import C from '../../images/c.png';
import react_js from '../../images/react.png';
import html from '../../images/html.png';
import java from '../../images/java.png';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Courses.css'
const coursesData = [
    {
     id: 1,
     courseName: 'JavaScript',
     logo: js,
    },
    {   id: 2,
        courseName: 'Python',
        logo: python,
    },
    {   id: 3,
        courseName: 'React js',
        logo: react_js,
    },
    {   id: 4,
        courseName: 'C++',
        logo: C,
       },
       {   id: 5,
           courseName: 'Java',
           logo: java,
       },
       {   id: 6,
           courseName: 'HTML',
           logo: html,
       },
       { id: 7,
        courseName: 'JavaScript Core',
        logo: js,
       },
       {   id: 8,
           courseName: 'Python Core',
           logo: python,
       },
       {   id: 9,
           courseName: 'C++',
           logo: C,
       },
       { id: 10,
        courseName: 'JavaScript',
        logo: js,
       },
       {  id: 11,
           courseName: 'Python',
           logo: python,
       },
       {   id: 12,
           courseName: 'C++',
           logo: C,
       },
]
const Courses = () => {
    const history = useHistory();
    const cardStyle = {boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', justifyContent: 'space-around',  border: '1.8px solid #dce2e5', borderRadius: '4px', textAlign: 'center', height: '196px', width: '174px', marginBottom: '10px', marginRight: '10px', paddingTop: '15px'}
    

    const handleCourseDetails = (parameter) => {
       history.push(`/courseDetails/${parameter}`)
    }



    return (
        <Container className="course-container" courses-id="courses-id">
        <h2 className="text-center m-5">What would you like to learn?</h2>
        <div className="course-data-container">
            {
                coursesData?.map((datum) => 
                <div style={cardStyle} key={datum.courseName} onClick={() => handleCourseDetails(datum.id)}>
                    <img src={datum.logo} alt={datum?.courseName} style={{width: '110px' ,borderRadius: '50%'}} />
                    <h4>{datum.courseName}</h4>
                    
                </div>
                
                )
                
            }
        </div>
        </Container>
    );
};

export default Courses;
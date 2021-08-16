import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const javaScript = () => {

const [js, setJs] = useState([])

useEffect(() => {
  fetch('http://localhost:5000/getJavascript')
  .then(res => res.json()) 
  .then(data => setJs(data))
}, [])


    return (
        <div>
            <h1>This is js </h1>
        </div>
    );
};

export default javaScript;
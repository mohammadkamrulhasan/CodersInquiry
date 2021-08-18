import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const JS = () => {
    const [javascript, setJavascript] = useState([])

    useEffect(() => {
    fetch('http://localhost:5000/getJavascript')
    .then(res => res.json()) 
    .then(data => setJavascript(data))
    }, [])

    return (
        <main>
            <section>
               {/* Sidebar */}
           </section>  
           <section>
              {/* Main content with all component */}
           </section>
        </main>
    );
};

export default JS;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const ReactJs = () => {
    const [React, setReact] = useState([])

    useEffect(() => {
    fetch('http://localhost:5000/getReactJs')
    .then(res => res.json()) 
    .then(data => setReact(data))
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

export default ReactJs;
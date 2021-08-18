import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Python = () => {
    const [Python, setPython] = useState([])

    useEffect(() => {
    fetch('http://localhost:5000/getPython')
    .then(res => res.json()) 
    .then(data => setPython(data))
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

export default Python;
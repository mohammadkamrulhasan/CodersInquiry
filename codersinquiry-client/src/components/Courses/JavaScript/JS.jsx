import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const JS = () => {
    const [javascript, setJavascript] = useState([])

    useEffect(() => {
    fetch('http://localhost:5000/getJavascript')
    .then(res => res.json()) 
    .then(data => setJavascript(data))
    }, [])

    return (
        <div>
            <h4>This is js part</h4>
        </div>
    );
};

export default JS;
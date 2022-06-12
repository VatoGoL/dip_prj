import React from 'react';
import Title from './components/Title';
import Wrap_Index from './components/Wrappers/Wrap_Index';
import Decoration from './components/Decoration'
import classes from './index.module.css';
function App() {
    
    return (
        <div className="App">
            <Title classes={classes}/>
`           <Wrap_Index classes={classes}/>
            <Decoration classes={classes} number="one"/>
            <Decoration classes={classes} number="two"/>
        </div>
    );
    
}

export default App;

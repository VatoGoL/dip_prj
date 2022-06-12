import React from 'react';
import Title from '../../components/Title';
import Wrap_Read_me from '../../components/Wrappers/Wrap_Read-me';
import Decoration from '../../components/Decoration';
import classes from './read_me.module.css';
export default function ReadMe(){
    
    return(
        <div className="read-me">
            <Title classes={classes}/>
            <Wrap_Read_me classes={classes}/>
            <Decoration classes={classes} number="one"/>
            <Decoration classes={classes} number="two"/> 
        </div>
    );
}
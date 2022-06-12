import React from 'react';
import StartButton from './../StartButton';
import EntryForm from './../EntryForm';
export default function Wrap_Index(props: {classes: { [key:string]: string }}){

    return(
        <div className={props.classes["wrapper"]}>
            <StartButton classes={props.classes}/>
            <EntryForm classes={props.classes}/>
        </div>
    );
}
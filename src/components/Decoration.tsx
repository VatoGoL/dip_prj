import React from 'react';

export default function Decoration(props:{number: string, classes: {[key: string]: string} }){
    
    return(
        <div className={props.classes["decoration"] + " " + props.classes[props.number]}>
            <img className={props.classes["decoration__img"]} src={"./../../../resources/index_page/balls_" + props.number + ".png"} alt="Декоративное изображение"/>
        </div>
    );
}
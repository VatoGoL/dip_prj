import React from 'react';

export default function Title(props: {classes: {[key: string]: string} }){

    return(
        <div className={props.classes["title"]}>
            <h1 className={props.classes["title__title"]}>FINDMEET</h1>
            <h2 className={props.classes["title__sub-title"]}>Найди друга по общим интересам</h2>
        </div>
    );
}
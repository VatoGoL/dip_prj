import React from 'react';

export default function StartButton(props: {classes: { [key:string]: string }}){    
    return(
        <a className={props.classes["start"]} href="https://oauth.vk.com/authorize?client_id=8149748&display=page&scope=friends&redirect_uri=https://oauth.vk.com/blank.html&v=5.52">
            <span id="index" >
                <p className={props.classes["start__text-one"]}>Авторизация</p> 
                <p className={props.classes["start__text-two"]}>VK</p>
            </span>
        </a>
    );
}
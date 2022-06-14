import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {setCookie} from '../library/FindMeet';
export default function EntryForm(props: {classes: { [key:string]: string }}){

    let [input, setInput] = useState(false);
    let [text, setText] = useState("");
    

    function checkValue(event: React.MouseEvent){
        if(input === false){
            event.preventDefault();
            alert("Введите токен для продолжения");
        }
        else{
            setCookie("code", text);
        }
    }

    return(
        <span className={props.classes["ent"]}>
            <span className={props.classes["line"]}></span>
            <form className={props.classes["entry"]} method="get">
                <input  type="text" 
                        className={props.classes["entry__input"]}
                        name="token" 
                        id="token" 
                        onChange={(e)=> {
                            setText(e.target.value);
                            return e.target.value !== '' ? setInput(true) : setInput(false);
                        }} 
                        placeholder="Введите токен"/>
                <Link to="/choice_chat" className={props.classes["entry__submit"]}>
                    <span   id="submit" 
                            onClick={(e)=> {checkValue(e);}} 
                    >Продолжить</span>
                </Link>
                
                <Link to="/read_me" className={props.classes["entry__text"]}>Что такое токен?</Link>
            </form>
        </span>
    );
}
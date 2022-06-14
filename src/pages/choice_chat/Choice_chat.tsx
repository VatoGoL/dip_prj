import React from 'react';
import classes from './choice_chat.module.css';
import Title from '../../components/Title'
import Wrap_Choice_Chat from '../../components/Wrappers/Wrap_Choice-chat';
export default function Choice_chat(){

    return (
        <div className="choice-chat">
            <Title classes={classes}/>
            
            <h3 className={classes["search-result"]}>Рузультаты поиска:</h3>
            <p className={classes["notification"]}>Загрузка потенциальных собеседников...</p>

            <Wrap_Choice_Chat classes={classes}/>

        </div>
    );
} 
import React from 'react';
import {Link} from 'react-router-dom';

export default function Wrap_Read_me(props: {classes: { [key:string]: string }}){

    return(
        <div className={props.classes["wrapper"]}>
            <div className={props.classes["table"]}>
                <h2 className={props.classes["table__title"]}>Как получить токен:</h2>
                <ol className={props.classes["table__ol"]}>
                    <li className={props.classes["table__li"]}>
                    Вернуться на&nbsp;
                    <Link className={props.classes["table__back"]} to="/">главную страницу</Link>
                    &nbsp;
                    </li>
                    <li className={props.classes["table__li"]}>Нажать на кнопку "Авторизация VK"</li>
                    <li className={props.classes["table__li"]}>Согласиться на предложенные права доступа</li>
                    <li className={props.classes["table__li"]}>После скопировать из URL адреса токен: https://oauth.vk.com/blank.html#access_token= <span className={props.classes["table__token"]}>76cf4702731**********</span> &expires_in=86400&user_id=227414575</li>
                    <li className={props.classes["table__li"]}>
                    Вернуться на&nbsp;
                    <Link className={props.classes["table__back"]} to="/">главную страницу</Link>
                    &nbsp;
                    и ввести токен в форму для продолжения работы
                    </li>
                </ol>
            </div>
            <Link className={props.classes["back"]} to="/">Вернуться назад</Link>
        </div>
    );
}
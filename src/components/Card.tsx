import React from 'react';

export default function Card(props: {person_id: number,
                                     name: string,
                                     surname: string,
                                     groups: string, 
                                     photo_url: string
                                     classes: { [key:string]: string }
                                    })
{

    return (
        <div className={props.classes["card"]}>
            <div className={props.classes["card__image-box"]}>
                <img className={props.classes["card__image"]} src={props.photo_url} alt={props.person_id.toString()}/>
            </div>
            <div className={props.classes["card__info-box"]}>
                <p className={props.classes["card__info-name"] + " " + props.classes["card__text-centr"]}>{props.name + " " + props.surname} </p>
                <h4 className={props.classes["card__info-text"] + " " + props.classes["card__text-centr"]}>Что у вас общего?</h4>
                <p className={props.classes["card__info-title"] + " " + props.classes["card__s"]}>Сообщество:</p>
                <ul className={props.classes["card__ul"]}>
                    <li className={props.classes["card__info-text-li"]}>
                        {props.groups}
                    </li>
                </ul>
            </div>
            <form className={props.classes["card__chat"]} action="../preview/preview.html" method="get">
                <span className={props.classes["card__start-span"]}>
                    <input type="text" className={props.classes["card__none"]} name="id"/>
                    <input type="submit" className={props.classes["card__start-chat"]} value="Начать общение!"/>
                </span>
            </form>
        </div>
    );                
}
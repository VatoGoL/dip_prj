import React from 'react';
import { useState, useEffect } from 'react';
import Card from './../../components/Card'
import {getCookie, getRandomInt} from '../../library/FindMeet';
export default function Wrap_Choice_Chat (props: {classes: { [key:string]: string }}){

    let [code, setCode] = useState("");

    async function getGroup(token: string){
        let url: string;
        let fGroup: Promise<any>;

        url = "/method/" + "groups.get?" + "&access_token=" + token + "&v=5.131";
        fGroup = await fetch(url)
        .then((response) => {return response.json();})
        .then((data) => {
            console.log(data);
            return data["response"]["items"];
        });
    }

    useEffect(() =>{
        let token = getCookie("code");
        
        if(token === undefined){
            alert("Нету токена. Вернитесь на главную страницу!");
            return;
        }
        setCode(token);

        //Максимальное колличество карточек участников & Максимальная выборка 
        const max_future_friends: number = 3;
        const max_members: number = 100;
        
        let res = async () => { 
            let url: string;
            let fGroup: Promise<any>;
                
            url = "/method/" + "groups.get?" + "&access_token=" + token + "&v=5.131";
            fGroup = await fetch(url,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
            })
            .then((response) => {return response.json();})
            .then((data) => {
                console.log(data);
                return data["response"]["items"];
            });
        }
        res();
        
        
    },);
    
    

    return(
        <div className={props.classes["wrapper"]}>
            <section className={props.classes["catalog"]}>

            </section>
        </div>
    );
}
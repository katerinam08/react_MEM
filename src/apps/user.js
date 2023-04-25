import { useState } from "react";

export function User(user) {
    
    return <>

        <div>Пользователь: {user.user.name} {user.user.last_name}</div>
        <div>Возраст: {user.user.age}</div>
        <div>Питомец: {user.user.cat.name}</div>
        <div>Возраст питомца: {user.user.cat.age}</div>
        
    </>;
    };
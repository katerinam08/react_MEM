import React from "react";
import { IUser } from "./interfaces/user";

interface DetailProps {
    user: IUser
}

class Detail extends React.Component<DetailProps> {
    render() {
        const {user} = this.props;

        return <>
            <ul>
                <li>Номер: {user.emp_no}</li>
                <li>ФИО: {user.last_name} {user.first_name} </li>
                <li>Дата рождения: {user.birth_date}</li>
                <li>Трудоустроен: {user.hire_date}</li>
                <li>Пол: {user.gender}</li>
            </ul>
        </>;
    }
}

export default Detail;
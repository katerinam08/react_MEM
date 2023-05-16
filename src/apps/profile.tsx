import React from "react";
import Salaries from "./Salaries";
import Detail from "./detail";

interface ISalary {
    emp_no: string,
    salary: string,
    from_date: string,
    to_date: string
}

interface IUser {
    emp_no: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender: string,
    hire_date: string,
    salaries: [ISalary]
}

interface ProfileProps {
    user: IUser
}

class Profile extends React.Component<ProfileProps> {

    render() {
        const {user} = this.props;

        return <>
            <Detail user={user}/> 
            <Salaries salaries={user.salaries}/>
        </>;
    }

}

export default Profile;
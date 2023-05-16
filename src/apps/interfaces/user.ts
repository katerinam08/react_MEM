import { ISalary } from "./salary";

export interface IUser {
    emp_no: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender: string,
    hire_date: string,
    salaries: [ISalary]
}
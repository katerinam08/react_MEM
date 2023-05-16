import React from "react";

interface EmployeesProps {
    employees: [
        {
        emp_no: string,
        first_name: string,
        last_name: string,
        birth_date: string
        }
    ]
    
}

class Employees extends React.Component<EmployeesProps> {
    render() {
        const {employees} = this.props;

        const employees_rows = employees.map((employees, index) => {
            return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{employees.emp_no}</td>
                            <td>{employees.first_name}</td>
                            <td>{employees.last_name}</td>
                            <td>{employees.birth_date}</td></tr>
          });

        return <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Emp_no</th>
                        <th>First_name</th>
                        <th>Last_name</th>
                        <th>Birth_date</th>
                    </tr>
                </thead>
                <tbody>
                    {employees_rows}
                </tbody>
               </table>
    }
}

export default Employees
import React from "react";

class Salaries extends React.Component {
    render() {
        return <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Salary</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {alaries}
            </tbody>
        </table>
    }
}

export default Salaries
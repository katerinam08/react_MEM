import React from "react";

interface WelcomeProps {
    user: {
        name: string,
        age: number,
    },
    label: string
}

class Welcome extends React.Component<WelcomeProps> {
    name = '';
    age = 0;

    render() {
        // console.log(this.props);
        const {user, label} = this.props;

        return <p style={{'color': label}}>Hello, {user.name}</p>;
    }
}

/*
{
    name: '',
}
*/


export default Welcome;
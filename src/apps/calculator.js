import { useState } from "react";
export function Calculator(props) {
const [text, setText] = useState('');

console.log(props);

return <>
<p>{text}</p>
<input type='text' placeholder="Text" onChange={(event) => {
setText (event.target.value);
// text=event.target.value;
}}/>
</>;
}
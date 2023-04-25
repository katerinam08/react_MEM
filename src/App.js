import './App.css';
import { Calculator } from './apps/calculator';
import { User } from './apps/user'; 

function hello(user) {
  if (user){
  
  return <div>
  <span>{user.name}</span><strong>{user.last_name}</strong> ;
  </div>
  }
  return 'undefined'
  }


  function App() {
  
  const a=10;
  const b=15;
  
  let user = {
  name: 'John',
  last_name: 'Barlowe',
  age: 30,
  cat: {
  name: 'Happy',
  age: 1,
  },
  salaries: [
  {
  salary: '5670',
  from_date: '2009'
  },
  {
  salary: '1670',
  from_date: '2018'
  },
  {
  salary: '15670',
  from_date: '2012'
  },
  ],
  };
  
  const c=<span>Hello</span>;
  const name=hello();
  
  const salaries=user.salaries.map((salary,index)=>{
  return <tr><td>{index+1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
  });
  
  return (
  <div>
  <p>A:{a}</p>
  <p> B:{b}</p>
  
  <p>Sum: { a + b} </p>
  <p>{c}, {name}</p>
  
  <Calculator/>
  <Calculator/> 
  <Calculator/>


  <User user={user}/> 
  
  <table>
  <thead>
  <tr>
  <th>#</th>
  <th>Salary</th>
  <th>Date</th>
  </tr>
  </thead>
  
  <tbody>
  {salaries}
  </tbody>
  </table>
  
  </div>
  );
  }

export default App;

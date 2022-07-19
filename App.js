import logo from './logo.svg';
import './App.css';

const name=<span>Hello Reactjs</span>

const test=()=>{
  alert("Hello")
}

const age=(a) => {
  if(a >18){
    return <span>You are Eligible</span>
  }
  else{
    return <span>You are not Eligible</span>
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello React World, {name}</h1>
      <button onClick={test}>Click Here</button><br></br>
      {age(20)}
      </div>
  );
}

export default App;

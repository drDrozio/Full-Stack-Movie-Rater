import './App.css';
import Footer from './components/footer';
import { Header } from './components/header';
import Content from './components/content'
import Numbers from './components/numbers'

function createAlert(){
  alert('You clicked for alert');
}

const pStyle = {
  fontSize:'2em',
  color:'red',
}

function App() {
  return (
    <div className="App">
      <Header info="This is info" message="This is message"/>
      {/* <Header info="This is info2" message="This is message2"/> */}
      <h1 style={pStyle}>Main Content</h1>
      <Content/>
      <Numbers/>
      <Footer trademark="Ishan" myAlert={createAlert}/>
    </div>
  );
}

export default App;

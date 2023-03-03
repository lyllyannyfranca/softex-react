import './App.css';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Maria" phone="81 99999-7777"/>
      <Contact name="João" phone="81 99999-8888"/>
      <Contact name="Sandra" phone="81 99999-6767"/>
    </div>
  );
}

export default App;

import {useState} from 'react';
import './App.css';
import Column from './components/Column';
import columns from './columns';

function App() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="App">
      <section className="trello-wrapper">
        {columns.map(column => {
          const {id, title} = column;
          return <Column key={id} title={title} index={index} setIndex={setIndex} />
        })}
      </section>
    </div>
  );
}

export default App;

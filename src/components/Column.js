import React, {useState} from 'react';
import NewItem from './NewItem';
import { useDrop } from 'react-dnd';

const Column = ({title, index, setIndex}) => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => addCardToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addCardToBoard = (obj) => {
    setItems(prev => {
      return [...prev, obj]
    })
  }


  const handleClick = () => {
    setIndex(index + 1);
    setItems(prevItems => {
      return [...prevItems, {id: index, name: input}];
    })
    setInput('');
    console.log(items)
  }

  return (
    <article className="column">
      <h3 className="title">{title}</h3>

      <div className="dropable-wrapper" ref={drop}>
        {items.map(item => {
          const {id, name} = item;
          return <NewItem id={id} name={name} key={id} />
        })}
      </div>

      <div className="input-warpper">
        <input className="input" type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn" onClick={handleClick}>Add item</button>
      </div>
    </article>
  );
}

export default Column;
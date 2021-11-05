import React from 'react';
import { useDrag } from 'react-dnd';

const NewItem = ({id, name}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: {id, name},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  return (
    <div ref={drag} className="item-wrapper" style={{opacity: isDragging ? '0.3' : '1'}}>
      <p className="item">{name}</p>
    </div>
  );
}

export default NewItem;
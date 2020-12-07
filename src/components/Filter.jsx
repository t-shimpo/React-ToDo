import React from 'react';
import '../css/Filter.css';


function Filter({ value, itemsNum, todoItemsNum, doneItemsNum,onChange }){
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="filter-tabs">
      {/* eslint-disable-next-line */}
      <a
        href="#"
        onClick={handleClick.bind(null, 'ALL')}
        className={ value === 'ALL' ? 'current-tab' : '' }
        >全件
        <span>{itemsNum}</span>
      </a>
      {/* eslint-disable-next-line */}
      <a
        href="#"
        onClick={handleClick.bind(null, 'TODO')}
        className={ value === 'TODO' ? 'current-tab' : '' }
        >未完了
        <span>{todoItemsNum}</span>
      </a>
      {/* eslint-disable-next-line */}
      <a
        href="#"
        onClick={handleClick.bind(null, 'DONE')}
        className={ value === 'DONE' ? 'current-tab' : '' }
        >完了
        <span>{doneItemsNum}</span>
      </a>
    </div>
  )
}

export default Filter
import React from 'react';
import '../css/Filter.css';


function Filter({ value,onChange }){
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="filter-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, 'ALL')}
        className={ value === 'ALL' ? 'mark font-weight-bold' : '' }
        >ALL</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'TODO')}
        className={ value === 'TODO' ? 'mark font-weight-bold' : '' }
        >TODO</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'DONE')}
        className={ value === 'DONE' ? 'mark font-weight-bold' : '' }
        >DONE</a>
    </div>
  )
}

export default Filter
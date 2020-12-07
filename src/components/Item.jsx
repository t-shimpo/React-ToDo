import React from 'react';
import '../css/Item.css';

function Item({ item,onCheck,onDelete,onEdit }) {
  const handleChange = () => {
    onCheck(item);
  };

  const handleClickDelete = () => {
    onDelete(item.id);
  }

  const handleClickEdit = () => {
    onEdit(item);
  }

  return (
    <li>
      <div className="item-left col-12 col-md-9 col-sm-8">
        <input
          type="checkbox"
          checked={item.done}
          onChange={handleChange}
          />
        <span className={item.done ? 'text-secondary item-done' : ''}>
          {item.text}
        </span>
      </div>
      <div className="item-right col-12 col-md-3 col-sm-4">
        <button
          className="btn btn-info"
          onClick={handleClickEdit}
          >編集</button>
        <button
          className="btn btn-dark"
          onClick={handleClickDelete}
          >削除</button>
      </div>
      <hr/>
    </li>
  );
}

export default Item


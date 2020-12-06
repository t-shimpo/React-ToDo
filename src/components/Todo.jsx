import React, {useState} from 'react';
import Input from './Input'
import Item from './Item'
import Filter from './Filter'
import '../css/Todo.css';

function Todo() {

  // タスクの数
  const [taskNum, setNum] = useState(1);

  // アイテム
  const [items, setItems] = useState([]);

  //アイテムの追加
  const handleAdd = text => {
    setItems([...items, { key: taskNum, text, done: false, editting: false }]);
    setNum(taskNum + 1);
  };

  // アイテムの編集

  // アイテムの削除
  const handleClickDelete = deleteKey => {
    const newItems = items.filter(item => item.key !== deleteKey);
    setItems(newItems);
  }

  // チェックボックスのOn/Offの処理
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  // フィルター
  const [filter, setFilter] = useState('ALL');

  const handleFilterChange = value => setFilter(value);
  
  //表示するアイテム
  // eslint-disable-next-line
  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });

  return (
    <div className="panel">
      <h1 className="heading">
        ToDo管理
      </h1>
      <Input onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      <div className="item-number">
        全 {displayItems.length} 件
      </div>
      <ul>
        {displayItems.map(item => (
          <Item
            key={item.key}
            item={item}
            onCheck={handleCheck}
            onDelete={handleClickDelete}
            />
        ))}
      </ul>
    </div>
  );
}

export default Todo
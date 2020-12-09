import React, {useState} from 'react';
import Input from './Input'
import Item from './Item'
import EditItem from './EditItem'
import Filter from './Filter'
import '../css/Todo.css';

function Todo() {

  // タスクの数
  const [taskNum, setNum] = useState(1);

  // アイテム
  const [items, setItems] = useState([]);

  //アイテムの追加
  const handleAdd = text => {
    const newItem = {
      id: taskNum,
      text,
      done: false,
      editting: false
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    setNum(taskNum + 1);
  };

  // アイテムの編集状態の切替
  const handleClickEditOrCancel = clicked => {
    const newItems = items.map(item => {
      if (item.id === clicked.id) {
        item.editting = !item.editting;
      }
      return item;
    });
    setItems(newItems);
  }

  // アイテムの更新
  const handleClickUpdate = (clicked, newText) => {
    const newItems = items.map(item => {
      if (item.id === clicked.id) {
        item.text = newText;
        item.editting = !item.editting;
      }
      return item;
    });
    setItems(newItems);
  }

  // アイテムの削除
  const handleClickDelete = deleteId => {
    const newItems = items.filter(item => item.id !== deleteId);
    setItems(newItems);
  }

  // チェックボックスのOn/Offの処理
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.id === checked.id) {
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

  // 未完了アイテム
  const todoItems = items.filter(item => item.done === false);
  // 完了アイテム
  const doneItems = items.filter(item => item.done === true);

  return (
    <div className="panel">
      <h1 className="heading">
        ToDo管理
      </h1>
      <Input onAdd={handleAdd}/>
      <Filter
        value={filter}
        onChange={handleFilterChange}
        itemsNum={items.length}
        todoItemsNum={todoItems.length}
        doneItemsNum={doneItems.length}
      />
      <ul>
        {displayItems.map(item => (
          <React.Fragment key={item.id}>
            {item.editting ? (
            <EditItem
              text={item.text}
              item={item}
              onChange={handleClickEditOrCancel}
              onUpdate={handleClickUpdate}
            />
            ) : (
            <Item
              item={item}
              onCheck={handleCheck}
              onDelete={handleClickDelete}
              onEdit={handleClickEditOrCancel}
            />
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Todo
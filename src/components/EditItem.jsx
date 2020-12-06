import React, {useState} from 'react';
import '../css/EditItem.css';

function EditItem({item, onChange, onUpdate}){
  const [text, setText] = useState(item.text);

  const handleChange = e => setText(e.target.value);

  const handleClickCancel = () => {
    onChange(item);
  }

  // 更新ボタン押下時の処理
  const handleClickUpdate = () => {
    if (!text) {
      alert("タスクを入力してください!");
      return;
    }
    onUpdate(item,text);
  }

  return (
    <li className="edit">
      <div className="item-left col-12 col-md-7 col-sm-6">
        <input
          type="text"
          className="edit-input"
          value={text}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div  className="item-right col-12 col-md-5 col-sm-6">
        <button
            className="btn btn-secondary"
            onClick={handleClickCancel}
            >キャンセル</button>
          <button
            className="btn btn-success"
            onClick={handleClickUpdate}
            >更新</button>
      </div>
      <hr/>
    </li>
  )
}

export default EditItem

import React, {useState} from 'react';
// import '../css/Input.css';

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
    <div>
      <input
        type="text"
        className="edit-input"
        value={text}
        onChange={handleChange}
        autoFocus
      />
      <button
          className="btn btn-info"
          onClick={handleClickCancel}
          >キャンセル</button>
        <button
          className="btn btn-dark"
          onClick={handleClickUpdate}
          >更新</button>
    </div>
  )
}

export default EditItem

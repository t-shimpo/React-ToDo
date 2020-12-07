import React, {useState} from 'react';
import '../css/Input.css';

function Input({onAdd}){
  const [text, setText] = useState('');

  const handleChange = e => setText(e.target.value);

  // Enter押下時の処理
  const handleKeyDown = e => {
    const title = e.target.value;
    if (e.key === 'Enter') {
      if (!title) {
        alert("タスクを入力してください");
        return;
      }
      onAdd(text);
      setText('');
    }
  }

  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="タスクを入力して Enter"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyDown}
      />
    </div>
  )
}

export default Input

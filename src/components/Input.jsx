import React from 'react';
import '../css/Input.css';

const Input = (props) => {
  return (
    <form className="form text-center">
        <input
          type="text"
          className="input"
          placeholder="新しいタスク"
        />
        <button type="button" className="input-btn btn btn-secondary">追加</button>
    </form>
  );
};

export default Input

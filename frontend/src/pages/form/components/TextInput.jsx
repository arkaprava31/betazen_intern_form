import React from 'react';
import { useCommonContext } from '../../Contexts/CommonContext';

const TextInput = ({ type, field, placeholder, label }) => {
  const { state, dispatch } = useCommonContext();

  const handleChange = (value) => {
    dispatch({ type: 'UPDATE_INPUT', payload: { field, value } });
  };

  return (
    <div className="info-box">
      <label>{label}</label>
      <input type={type} value={state[field] || ''} onChange={(e) => handleChange(e.target.value)} placeholder={placeholder}/>
    </div>
  );
};

export default TextInput;

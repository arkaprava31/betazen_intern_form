import React from 'react';
import { useCommonContext } from '../../Contexts/CommonContext';

const TextAreaInput = ({ field, placeholder, label }) => {
  const { state, dispatch } = useCommonContext();

  const handleChange = (value) => {
    dispatch({ type: 'UPDATE_INPUT', payload: { field, value } });
  };

  return (
    <div className="info-box">
      <label>{label}</label>
      <textarea value={state[field] || ''} onChange={(e) => handleChange(e.target.value)} placeholder={placeholder}/>
    </div>
  );
};

export default TextAreaInput;

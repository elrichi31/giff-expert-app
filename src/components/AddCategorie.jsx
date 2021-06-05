import React, { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategorie = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 2) {
        setCategories([inputValue])
        setInputValue('')
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-group">
      <input type="text" value={inputValue} onChange={handleInputChange} className="form-control"/>
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

AddCategorie.propTypes = {
    setCategories: PropTypes.func.isRequired
}
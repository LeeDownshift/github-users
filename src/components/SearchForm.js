import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({searchTerm, handleKeyPress, handleClick, handleClear}) {
  return (
    <form className="form-inline col-12 mx-2 mb-5">
      <input 
        className="form-control col-sm-12 col-md-9" 
        type="text" 
        placeholder="Search users" 
        aria-label="Search users"
        value={searchTerm}
        onChange={handleKeyPress}
      />
      <input 
        type="submit" 
        className="btn btn-primary col-md-1 ml-2 my-2" 
        value="Search" 
        aria-label="Search"
        onClick={handleClick} 
      />
      <input 
        type="button" 
        className="btn col-md-1 ml-2 my-2" 
        value="Clear" 
        aria-label="Clear"
        onClick={handleClear} 
      />
    </form>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
}

export default SearchForm;
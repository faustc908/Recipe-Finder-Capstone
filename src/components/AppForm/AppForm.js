import React from "react";

//Present Search Form

const AppForm = (props) => {
  const inputEl = React.useRef(null);

  // Get value of input element and pass to onSearch event.
   
  const handleSearch = (e) => {
    e.preventDefault();
    props.onSearch(inputEl.current.value);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        className="search-bar"
        type="text"
        placeholder="Banana"
        ref={inputEl}
        required
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default AppForm;

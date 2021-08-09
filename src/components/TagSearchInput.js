import React from "react";


function TagSearchInput(props) {

    const { value, onChange, name } = props;

    return (
        
        <input className="findTagSearch"
            type="text"
            placeholder="Search by tag"
            name={name}
            value={value}
            onChange={onChange}
        />


    );
}

export default TagSearchInput;
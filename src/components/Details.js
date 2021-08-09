import React from "react";


function Details(props) {

  const { student, toggle, clickPage } = props;

  return (
    <div style={{ display: (toggle && clickPage === student.id ? 'block' : 'none') }}>
      {
        student.grades.map((grade, index) => {

          return (<div>
            
            <p key={index} className="">{`Test ${index + 1}:  \u00A0   \u00A0  \u00A0 \u00A0 ${grade} %`}</p>
            
          </div>

          )

        })}
    </div>
  );
}

export default Details;
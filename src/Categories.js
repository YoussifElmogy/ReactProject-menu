import React from 'react';

const Categories = ({ cat, filterItems }) => {
  return( <div className="btn-container">
    {
      cat.map((item, index) => {
        return (<button onClick={() => filterItems(item)} key={index} type="button" className="filter-btn" >{item}</button>);
      })
    }


  </div>
  )
};

export default Categories;

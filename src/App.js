import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allcat = ['all', ...new Set(items.map((item) => item.category))];


function App() {

  const [menu,setmenu] =useState(items);
  const [cat,setcat]=useState(allcat);

  const filterItems =(category)=>{
    if(category==='all'){
      setmenu(items);
      return;
    }
    const newItem = items.filter((item)=>item.category===category)
    setmenu(newItem);
    
  };
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories cat={cat} filterItems={filterItems}></Categories>
      <Menu menu={menu}></Menu>

    </section>
  </main>;
}

export default App;

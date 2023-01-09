import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchCategory] = useState("");
  // const [newItem, setItemProperties] = useState({
  //   name: "",
  //   category: "Produce",
  // })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }).filter((item) => {
    return item.name.toUpperCase().includes(search.toUpperCase())
});

  function handleCategorySearch(e){
    setSearchCategory(e.target.value)
    // console.log(searchCategory)
  }

  // function handleNewItemChange(e){
  //   let name = e.target.name;
  //   setItemProperties({...newItem, [name]: e.target.value})
  //   console.log(newItem)
  // }
  
  // const searchDisplay = items.filter((item) => {
  //   return item.name.includes(searchCategory)
  // })



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={handleCategorySearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

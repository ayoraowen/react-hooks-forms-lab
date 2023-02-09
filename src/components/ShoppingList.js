import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchText] = useState("");
  //const [submittedData, setSubmittedData] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch (event){
    setSearchText(event.target.value)
  }

  // function addNewItem(item) {
  //   const dataArray =  [...submittedData, item]
  //   console.log(dataArray)
  //   setSubmittedData(dataArray)
  // }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchedItemsToDisplay = itemsToDisplay.filter((item) => {
    if (search === "") return true;
    
    return item.name.includes(search)
    
  })

  
  



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {searchedItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

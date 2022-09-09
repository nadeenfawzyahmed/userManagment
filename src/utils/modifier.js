export const deleteItem = (itemList, id) => {
    return itemList.filter((item) => item.id !== id);
  };

  export const addNewItem = (itemList, itemToAdd) => {
    itemList.push(itemToAdd);
    return itemList;
  };
  export const updateItemDetails = (item_list, itemToUpdate) => {
    const item = item_list.find((item) => item.id === itemToUpdate.id);
    item_list[item_list.indexOf(item)] = itemToUpdate;
    return item_list;};
  
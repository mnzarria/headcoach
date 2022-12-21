import React from 'react'
import Item from '../../components/Item';

const ItemListContainer = () => {
  return (
    <div className='item-list-container'>
        <Item title={"Messi 1"}/>
        <Item title={"Messi 2"}/>
        <Item title={"Messi 3"}/>
        <Item title={"Messi 4"}/>
        <Item title={"Messi 5"}/>
    </div>
  )
}

export default ItemListContainer
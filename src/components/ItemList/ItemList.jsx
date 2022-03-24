import Items from '../Items/Items'

function ItemList({ itemList, deleteItem, updateItem }) {
    return (
        <>
            <ul>
                {itemList.map(item =>
                // Items rendered from Items component
                    <Items
                        key={item.id}
                        item={item}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                    />
                )}
            </ul>
        </>
    )
}; 

export default ItemList;
import Items from '../Items/Items'

function ItemList({ itemList, deleteItem }) {
    return (
        <>
            <ul>
                {itemList.map(item =>
                // Items rendered from Items component
                    <Items
                        key={item.id}
                        item={item}
                        deleteItem={deleteItem}
                    />
                )}
            </ul>
        </>
    )
}; 

export default ItemList;
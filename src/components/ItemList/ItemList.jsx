function ItemList ({itemList}) {
    return (
        <>
            <ul>
                <li>{itemList.map(item => 
                    <Item 
                        key={item.id}
                        item={item}
                    />
                    )}</li>
            </ul>
        </>
    )
}

export default ItemList;
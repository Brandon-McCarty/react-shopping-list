function Items({item, deleteItem, updateItem}) {
    // console.log('I am self aware, you are in Items.jsx: ', item);

    const handlePurchase = () => {
        console.log('BUY BUY BUY', item.item)
        updateItem(item);
    }

    return (
        <div  className="itemContainer">
            <div className="itemMargin">Item Name: {item.item} <br />
            Amount: {item.quantity} {item.unit} <br />
            </div>
            
            <div>
            {item.purchased ? <p>Purchased!</p> : 
            <span><button onClick={handlePurchase}>Buy</button>
            <button onClick={(event) => {deleteItem(item)}}>Delete</button></span> }
            
            </div>    
            <br />
        </div>
    )
}

export default Items;
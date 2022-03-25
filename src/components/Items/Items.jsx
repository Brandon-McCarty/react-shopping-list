function Items({item, deleteItem, updateItem}) {
    // console.log('I am self aware, you are in Items.jsx: ', item);

    const handlePurchase = () => {
        console.log('BUY BUY BUY', item.item)
        updateItem(item);
    }

    return (
        <>
        <li>Item Name: {item.item} | Amount: {item.quantity} {item.unit} 

        {item.purchased ? <p>Purchased!</p> : 
        <span><button onClick={handlePurchase}>Buy</button>
        <button onClick={(event) => {deleteItem(item)}}>Delete</button></span> }
           
        </li>
            <br />
        </>
    )
}

export default Items;
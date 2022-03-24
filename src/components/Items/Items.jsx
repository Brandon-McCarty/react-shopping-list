function Items({item, deleteItem}) {
    console.log('I am self aware, you are in Items.jsx: ', item);

    const handlePurchase = () => {
        console.log('BUY BUY BUY')
    }


    return (
        <>
        <li>Item Name: {item.item} | Amount: {item.quantity} {item.unit} 
        <span><button onClick={(event) => {handlePurchase}}>Buy</button></span>
        <span><button onClick={(event) => {deleteItem(item)}}>Delete</button></span>
        </li>
            <br />
        </>
    )
}

export default Items;
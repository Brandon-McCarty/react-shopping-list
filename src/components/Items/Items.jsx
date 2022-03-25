import swal from 'sweetalert';

function Items({ item, deleteItem, updateItem }) {
    // console.log('I am self aware, you are in Items.jsx: ', item);

    // fires on click of Buy button
    // toggles the purchased state of the item
    const handlePurchase = () => {
        console.log('BUY BUY BUY', item.item)
        updateItem(item);
    }

    // fires on the click of the delete button: 
    // alerts user that delete is permanent
    // sends specific item up to deleteItems function in App.jsx
    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Item Deleted!", {
                    icon: "success",
                });
                deleteItem(item);
            } else {
                swal("Your item was not deleted.");
            }
        });
    }

    //renders item onto the DOM:
    return (
    <>
        {/* conditionally renders item based on purchased status */}
        <div className={item.purchased ? "purchased" : "itemContainer"}>
            <div className="itemMargin">Item Name: {item.item} <br />
                Amount: {item.quantity} {item.unit} <br />
            </div>
            {/* container for buttons, renders based on purchased status */}
            <div>
                {item.purchased ? <span>Purchased!</span> :
                    <span><button onClick={handlePurchase}>Buy</button>
                        <button onClick={handleDelete}>Delete</button></span>}
            </div>
            <br />
        </div>
    </>
    )
}

export default Items;
import swal from 'sweetalert';

function Items({item, deleteItem, updateItem}) {
    // console.log('I am self aware, you are in Items.jsx: ', item);

    const handlePurchase = () => {
        console.log('BUY BUY BUY', item.item)
        updateItem(item);
    }

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
                // console.log('items to delete: ', item)
                deleteItem(item);
            } else {
                swal("Your item was not deleted.");
            }
            });
    }

    return (
        <div  className="itemContainer">
            <div className="itemMargin">Item Name: {item.item} <br />
            Amount: {item.quantity} {item.unit} <br />
            </div>

            <div>
            {item.purchased ? <span>Purchased!</span> : 
            <span><button onClick={handlePurchase}>Buy</button>
            <button onClick={handleDelete}>Delete</button></span> }
            
            </div>    
            <br />
        </div>
    )
}

export default Items;
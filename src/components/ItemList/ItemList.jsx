import Items from '../Items/Items';
import swal from 'sweetalert';

function ItemList({ itemList, deleteItem, updateItem }) {

    const deleteLoop = () => {
        // Sweetalerts confirm action before deleting items
        swal({
            title: "Are you sure?",
            text: "This action is permanent.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        // If confirmed, follow through with deletion process
        }).then((willDelete) => {
            if (willDelete) {
                swal("List cleared.", {
                    icon: "success",
                });

                for (let item of itemList) {
                    // delete each item from itemList
                    deleteItem(item);
                }
            } else {
                // If declined, do nothing
                swal("Delete Cancelled");
            }
        });
    };

    const updateLoop = () => {
        // Sweetalerts confirm action before updating items
        swal({
            title: "Are you sure?",
            text: "This will reset the list.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        // If confirmed, follow through with update process    
        }).then((willDelete) => {
            if (willDelete) {
                swal("List reset.", {
                    icon: "success",
                });

                for (let item of itemList) {
                    if (item.purchased === true) {
                        // Update each item from itemList
                        updateItem(item);
                    }
                }
            } else {
                // If declined, nothing happens
                swal("Reset Cancelled");
            }
        });
    }

    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={updateLoop}>Reset</button>
            <button onClick={deleteLoop}>Clear</button>
            <div className="list">
                {itemList.map(item =>
                    // Items rendered from Items component
                    <Items
                        key={item.id}
                        item={item}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                    />

                )}
            </div>
        </>
    )
};

export default ItemList;



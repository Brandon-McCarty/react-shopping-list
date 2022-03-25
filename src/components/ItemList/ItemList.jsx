import Items from '../Items/Items';
import swal from 'sweetalert';

function ItemList({ itemList, deleteItem, updateItem }) {

    const deleteLoop = () => {
        swal({
            title: "Are you sure?",
            text: "This action is permanent.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("List cleared.", {
                    icon: "success",
                });

                for (let item of itemList) {
                    // console.log('items to delete: ', item)
                    deleteItem(item);
                }
            } else {
                swal("Delete Cancelled");
            }
        });
    };

    const updateLoop = () => {
        swal({
            title: "Are you sure?",
            text: "This will reset the list.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("List reset.", {
                    icon: "success",
                });

                for (let item of itemList) {
                    if (item.purchased === true) {
                        updateItem(item);
                    }
                }
            } else {
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



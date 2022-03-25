import { useState } from 'react';
import axios from 'axios';

function ItemForm({ getItems }) {

    //state values for item object properties
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');
    const [newItemUnit, setNewItemUnit] = useState('');

    //function to add new item on click of add item
    const handleSubmit = (event) => {
        // Prevent constant page refresh
        event.preventDefault();

        axios.post('/list', { item: newItemName, quantity: newItemQuantity, unit: newItemUnit })
            .then((response) => {
                console.log('form post response', response);
                // Re-render the list with all items
                getItems();
                // Reset input fields for new use
                setNewItemName('');
                setNewItemQuantity('');
                setNewItemUnit('');
            }).catch((err) => {
                console.log('Error in form post', err);
            })

    }

    return (
        <>
            <div align="left" className="form" >
                <h2>Add an Item:</h2>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="item"> Item Name: </label>
                    <input id="item" type="text" placeholder="Item Name"
                        onChange={(event) => setNewItemName(event.target.value)}
                        value={newItemName} />

                    <label htmlFor="qty"> Quantity: </label>
                    <input id="qty" type="number" placeholder="Item Quantity"
                        onChange={(event) => setNewItemQuantity(event.target.value)}
                        value={newItemQuantity} />


                    <label htmlFor="unit"> Unit: </label>
                    <input id="unit" type="text" placeholder="Item Unit"
                        onChange={(event) => setNewItemUnit(event.target.value)}
                        value={newItemUnit} />

                    <button type="submit">Add Item</button>
                </form>
            </div>
        </>
    )
}

export default ItemForm;

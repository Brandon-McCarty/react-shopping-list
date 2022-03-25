import {useState} from 'react';
import axios from 'axios';

function ItemForm ({getItems}) {
    
    //state values for item object properties
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(0);
    const [newItemUnit, setNewItemUnit] = useState('');
    
    //function to add new item
    const handleSubmit = (event) => {

        event.preventDefault();

        axios.post('/list', { item: newItemName, quantity: newItemQuantity, unit: newItemUnit})
        .then((response) => {
            console.log('form post response', response);
            getItems();
            setNewItemName('');
            setNewItemQuantity('');
            setNewItemUnit('');
        }).catch((err) => {
            console.log('Error in form post', err);
        })

    }

    return (
       <> 
         <div align = "center">
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Item Name"
                onChange={(event) => setNewItemName(event.target.value)}
                value={newItemName}/>
                <input type="number" placeholder="Item Quantity"
                onChange={(event) => setNewItemQuantity(event.target.value)}
                value={newItemQuantity}/>
                <input type="text" placeholder="Item Unit"
                onChange={(event) => setNewItemUnit(event.target.value)}
                value={newItemUnit}/>
                <button type="submit">Add Item</button>
             </form>
         </div>
        </>
    )
}

export default ItemForm;

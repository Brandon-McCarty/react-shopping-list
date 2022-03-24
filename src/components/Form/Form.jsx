import {useState} from 'react';
import axios from 'axios';

function ItemForm ({fetchItems}) {
    
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(0);
    const [newItemUnit, setNewItemUnit] = useState('');
    
}


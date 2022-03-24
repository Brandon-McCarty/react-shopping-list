import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ItemForm from '../ItemForm/ItemForm'
import './App.css';
import ItemList from '../ItemList/ItemList.jsx';


function App() {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        axios.get('/list')
        .then(response => {
            setItemList(response.data);
        })
        . catch(err => {
            console.log('Error in get on App side: ', err);
        })
    }

    const deleteItem = (itemToDelete) => {
        console.log('Delete from App.jsx').
        axios.delete(`/list/${itemToDelete.id}`)
        .then(response => {
            //getItems
            console.log('successful delete: ', response);
        }).catch(err => {
            console.log('error in delete from App.jsx: ', err);
        })
    }

    console.log(itemList);
    return (
        <div className="App">
            <Header />
            <main>
                {/* Will need component links for Form & List (Item will be linked to List) */}
                <div>
                <ItemForm getItems={getItems}/>
                </div>

                <ItemList 
                    itemList={itemList}
                    deleteItem={deleteItem}
                />

                
                
            </main>
        </div>
    );
}

export default App;


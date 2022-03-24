import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ItemForm from '../ItemForm/ItemForm'
import './App.css';


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

    console.log(itemList);
    return (
        <div className="App">
            <Header />
            <main>
                {/* Will need component links for Form & List (Item will be linked to List) */}
                <div>
                <ItemForm getItems={getItems}/>
                </div>

                {/* <div>
                <List />
                </div> */}

                
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;


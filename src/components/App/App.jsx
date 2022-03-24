import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
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

    console.log(itemList);
    return (
        <div className="App">
            <Header />
            <main>
                {/* Will need component links for Form & List (Item will be linked to List) */}
                {/* <div>
                <ListForm />
                </div> */}

                <ItemList 
                    itemList={itemList}
                />

                
                
            </main>
        </div>
    );
}

export default App;

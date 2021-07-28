import React, { useState } from 'react';

const App = () => {

    const [data, changeData] = useState('');
    const [items, setItem] = useState([]);

    const itemEvent = (event) => {
        changeData(event.target.value);
    }

    const addItem = () => {
        setItem((oldData) => {
            return [...oldData, data]
        });
        changeData('');
    }

    const removeItem = (i) => {
        setItem((oldItems) => {
            return oldItems.filter((arritems, index) => {
                return index !== i;
            })
        })
        console.log("dlt");
    }

    return (
        <>
            <div className="body">
                <div className="app">
                    <div className="head">
                        <h1> ToDo List </h1>
                    </div>

                    <div className="items">
                        <input className="ip" type="text" placeholder="Add a note" value={data} onChange={itemEvent} />
                        <button className="add" onClick={addItem}> + </button>
                    </div>

                    <ul type="none">
                        {items.map((itemData, index) => {
                            return <li>
                                <button
                                    className="remove"
                                    onClick={() => {
                                        removeItem(index);
                                    }}> ✘  </button>
                                {itemData} </li>
                        })}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default App;
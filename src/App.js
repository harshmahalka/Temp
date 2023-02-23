import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App=()=>{
    let expenses = [
        {
            id:'e1',
            title: 'school fee',
            amount: 250,
            date : new Date(2021,5,21)
        },
        {
            id:'e2',
            title: 'Books',
            amount: 2530,
            date : new Date(2021,2,22)
        },
        {
            id:'e3',
            title: 'House Rent',
            amount: 700,
            date : new Date(2021,4,2)
        },
        {
            id:'e4',
            title: 'Food',
            amount: 550,
            date : new Date(2021,5,5)
        }
    ];
    return(
        <div>
            <h2>Lets get started</h2>
            <Expenses item={expenses}/>
        </div>
    ); 
}

export default App;

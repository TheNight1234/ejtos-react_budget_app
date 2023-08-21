
import React,{useContext} from 'react';
import {AppContext} from '../context/AppContext'


const Budget = ()=> {
    const {budget,dispatch,currency} = useContext(AppContext);
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const budgetChange = (e)=>{
        const value= e.target.value;
        if(value>20000){
            alert("Budget Can't exceed £20000");
            return;
        }
        
        if(value<totalExpenses){
            alert("You Cannot Reduce The Budget Value Lower Than Spendings");
            return;
        }



        dispatch({
            type:"SET_BUDGET",
            payload:e.target.value
        });
    }
    return(
        <div className = 'alert alert-secondary'>
            <span>Budget: {currency}<input lang="en" type="number" value={budget} step="10" onChange={budgetChange}/></span>
        </div>
    );
};

export default Budget;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./MyCss.css";
const Currency = () => {
    const {dispatch}=useContext(AppContext);

    const changeCurrency = (e) =>{
        dispatch({
            type:"CHG_CURRENCY",
            payload:e.target.value
        });
    }
    return (
        <div className='alert alert-secondary'>
                <div  class="input-group flex-nowrap">
                <label class="special" for="currency">Currency</label>

                <select class="special" id="currency" onChange={changeCurrency}>
                <option value="$" name="$">$ Dollar</option>
                 <option value="£" name="£">£ Pound</option>
                 <option value="€" name="€">€ Euro</option>
                <option value="₹" name="₹">₹ Ruppee</option>
                 </select>
                </div>
           

            
        </div>
    );
};
export default Currency;
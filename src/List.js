import { useState } from 'react';
import './List.css'
import pic from './minus.jpg';

function List(props)
{
    const [val,setVal]=useState();
    const [arr,setArr]= useState([]);
    function handleChange(e)
    {
        setVal(e.target.value);
    }
    function setit()
    {
        if(val!=null)
        {
        setArr([...arr,val]);
        setVal('');
        }
        
    }
    return(
        <div>
            <div className="ListDiv">
                <p className="ListText">Your List : </p>
                <ul>
                {arr.map((it)=>{return <span><li>{it}</li><img src={require("./minus.jpg")}/></span>})}
                </ul>
            </div>
            <div className="Input">
                <input className="AddItem" placeholder="Add an Item" type="text" onChange={handleChange} value={val}/>
                <a type="submit" onClick={setit}>Add Item</a>
                <img src={pic} className="minus-img"/>
            </div>
        </div>
    );
}

export default List;
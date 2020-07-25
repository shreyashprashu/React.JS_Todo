import React from 'react';
import './ListItems.css'


function ListItems(props) {
    //console.log("dygdhg",props);
    const propItems=props.passItems;
    //console.log(propItems);
    const renderItems=propItems.map((item) =>{
        return (
            <div className='renderList' key={item.key}>

                <p>
                   <input type='text' id={item.key}
                    value={item.text}
                    onChange={
                        (e) =>{
                            props.updateItem(e.target.value,item.key)
                        }
                    }
                    /> 
                <button onClick={()=>{props.deleteItem(item.key)}}>Del</button>
                </p>
            </div>

        )


    })
    return (
            <div>
            {renderItems}
            </div>
        
    )
}
// ReactDOM.render(

// )

export default ListItems;
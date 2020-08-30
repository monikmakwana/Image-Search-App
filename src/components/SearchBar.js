import React from 'react';
export const SearchBar=(props)=>{
    return (<div className='form-group'>
        <br></br>
        <input type='text' onChange={props.takeInput} className='form-control' placeholder='Search Any Image'/>
         
        <button onClick={props.btClick} className='btn btn-primary'>Search Now</button>
        </div>
    );
}
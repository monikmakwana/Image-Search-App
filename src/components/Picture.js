import React from 'react';
import '../App.css';
export const Picture = (props)=>{
    return (
    <div className="gif">
    <img src={props.url} alt="Image is Missing"/>
    </div>
    )
};
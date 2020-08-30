import React from 'react';
import '../App.css';
import { Picture } from './Picture';
export const SearchList = (props)=>{
    let totalNumberOfRecords = props.imagedata.length;

    console.log('Props Received in List ',props.imagedata);
    const noRecordFoundJSX = <p>No Record Found</p>;
    const successJSX=(
        <>
        
        <p>List of Records : {totalNumberOfRecords}</p>
        <div className="gifs">
        {props.imagedata.map(ele=><Picture url={ele.images.original.url} />)}

        {/* {props.imagedata.map(ele=><img src={ele.images.original.url} />)} */}
        
        </div>
        </>
    );
    return (
        <div>
            {props.imagedata.length==0?noRecordFoundJSX:successJSX}
            
        </div>
    )
}
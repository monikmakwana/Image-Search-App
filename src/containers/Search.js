import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchList } from '../components/SearchList';

export default class Search extends React.Component{
constructor(props){
    //init Props and States
    super(props); //calling a parent constructor
    //initialize the props from the parent and give it to
    // props = {} // It is an Empty Object
    // props.title = "Image Search App"
    this.searchTxtValue='';
    this.state = {imagedata:[]};
}
componentDidMount(){
    //this.giveMeTheData();
}
giveMeTheData(searchValue){
    const url=`https://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${searchValue}&limit=10`;
    const promise = fetch(url);
    promise.then(response=>{
        var p = response.json();
        p.then(result=>{
            console.log('Data is ',result.data);
            this.setState({imagedata:result.data});
           
        }).catch(err=>{
            console.log('Error in Json');
        })
        console.log('Response is Coming');
    }).catch(err=>{
        console.log('Error Coming From the Server',err);

    })

}
takeInput(event){
    let data=event.target.value;
    this.searchTxtValue=data;
    console.log('Calling by Child',this.searchTxtValue);
}
searchNow(){
    console.log('Search Button is Click');
    this.giveMeTheData(this.searchTxtValue);
}
render(){
    console.log('Image Data is ',this.state.imagedata);
    return(
    <div>
        <h1 className="alert-info text-center">{this.props.title}&nbsp;{this.props.name}</h1>      
        <SearchBar takeInput={this.takeInput.bind(this)} btClick={this.searchNow.bind(this)} />
        <SearchList  imagedata={this.state.imagedata}/>
    </div>  
    ) 
}

}
/* Dumb and Old
function Search(){
    return (<div>
        <h1 className="alert-info text-center">Search Engine App</h1>
    </div>)
}
export default Search;
*/
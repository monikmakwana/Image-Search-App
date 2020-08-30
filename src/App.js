// App is a Component
// Top Level Component
import React from 'react';
import Search from './containers/Search';
export function App(props){
  return (
    <div className="container">
      <br></br>
      <Search title='Image Search App'/>
     </div>
  )
}
export const x=100;
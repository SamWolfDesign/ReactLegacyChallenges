import React from 'react';

const CatList = (props) => {
console.log("Oh snap whaddap?")
return (
  <div>
    {props.breeds.map((breed,index) =>  (<li key={index}>{breed}</li>))}
  </div>
)
}

export default CatList;

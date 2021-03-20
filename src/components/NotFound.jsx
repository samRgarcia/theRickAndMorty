import React from 'react';
let Image = 'https://i.stack.imgur.com/6M513.png'
const NotFound =()=>{
    return (
        <div style={{backgroundImage:`URL(${Image})`,backgroundSize:'cover',backgroundPosition:'centre',width:'100vw',height:'100vh'}} >
        </div>
    )
}

export default NotFound;

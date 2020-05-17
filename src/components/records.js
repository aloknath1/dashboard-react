import React from 'react';

function Records(props,name) {    
    return (
        <tr>           
           <td>{props.name}</td>           
            <td>{props.diameter}</td>
            <td>{props.climate}</td>
            <td>{props.gravity}</td>
            <td>{props.terrain}</td>
            <td>{props.surface_water}</td>
            <td>{props.population}</td>
        </tr>
        );      
}

export default Records;
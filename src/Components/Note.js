import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';


const Note = (props) => {

    const deleteItem = () => {
        props.deleteData(props.id);
    }
    
    return (
        <>
            <div className="note__style">
                <h1> {props.title} </h1>
                <br/>
                <p> {props.content} </p>
                <Button onClick = {deleteItem} className="btn__style"> <DeleteOutlineIcon className="delete__icon"/> </Button>
            </div>
        </>
    )
}

export default Note

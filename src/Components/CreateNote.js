import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNode] = useState(
        {
            title:'',
            content: '',
        });
    
    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
     
        const {value, name } = event.target;
        
        setNode((prevData) => {
            return {
                ...prevData,
                [name]  : value,
            }
        })
        
    }

    const addEvent = () => {
        props.passNote(note);
        setNode(
            {
                title:'',
                content: '',
            }
        )
    }

    const expandIt = () => {
        setExpand(true)
    }

    const bToNorm = () => {
        setExpand(false)
    }

    return (
        <>
            <div className="main__note"  onDoubleClick={bToNorm}>
                <form >
                {expand ?
                    <input 
                        type="text" 
                        name="title" 
                        value={note.title}
                        onChange = {InputEvent} 
                        placeholder="Title" 
                        autoComplete="off"/>
                        : null}
                    <textarea 
                        rows='' 
                        column='' 
                        name="content"
                        value={note.content}
                        onChange = {InputEvent} 
                        placeholder="Write a note..."
                        onClick= {expandIt}
                        
                        ></textarea>
                    {expand ?                
                    <Button className="button__Note"  onClick = {addEvent}> 
                        <AddIcon className='plus__sign' />
                    </Button>
                    :null}
                </form>
            </div>
        </>
    )
}

export default CreateNote

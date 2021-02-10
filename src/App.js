import React, { useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import CreateNote from './Components/CreateNote'
import Note from './Components/Note'


const App = () => {

  const [addData , setAddData] = useState([])

  const addNote = (note) => {
    
    // alert('Code working....')
    setAddData((prevData) => {
      return[...prevData , note ]
    }) 
  }

  const deleteItem = (id) => {
    setAddData((prevData) =>

      prevData.filter((currData , indx) => {
        return indx !== id;
      })
    )
  }

  return (
    <>
      <Header/>
      <CreateNote
        passNote = {addNote}
      />
     
        {
          addData.map((currItem , id ) => {
              return <Note
                key ={id}
                id={id}
                title={currItem.title}
                content = {currItem.content}
                deleteData = {deleteItem}
              />
          })
        }
      
      <Footer/>
    </>
  )
}

export default App

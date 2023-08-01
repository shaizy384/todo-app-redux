import React, { useState } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { addListItem, removeAllItems } from './redux/actions'

const Home = () => {
  // const newItems = useSelector((state) => state.allItems)
  // console.log(newItems)

  const [text, setText] = useState()
  const dispatch = useDispatch()
  const handleAddItems = () => {
    dispatch(addListItem(text))
  }

  const listItems = useSelector((state) => state.allItems.items)
  console.log("listItems", listItems)

  const handleRemoveAll = () => {
    dispatch(removeAllItems())
  }
  return (
    <>
      <div className='pt-5 w-25 m-auto' >
        <h1 className='text-center text-white pb-2'>To-do List App</h1>
        <div className="input-group">
          <input type="text" className='form-control' onChange={(e) => setText(e.target.value)} />
          <button className='btn btn-light' style={{ background: "#8e44ad", borderColor: "#8e44ad" }} onClick={handleAddItems}>
            <i className="fa-solid fa-plus text-white"></i>
          </button>
        </div>
        <div className="list my-5">
          {
            listItems.map((element) => {
              return <ListItem key={element.id} {...element} />
            })
          }
        </div>
        {listItems.length !== 0 && <div>
          <button className='btn btn-primary w-100' style={{ background: "#8e44ad", borderColor: "#8e44ad" }} onClick={handleRemoveAll}><h5 className='my-0'>Remove All</h5></button>
        </div>}
      </div>
    </>
  )
}

export default Home
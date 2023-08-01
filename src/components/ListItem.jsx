import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteListItem } from './redux/actions'

const ListItem = ({ id, item }) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(deleteListItem(id))
  }
  return (
    <>
      <div className="card text-white px-3 py-2 mb-3" style={{ background: "#8e44ad" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className='mb-0'>{item}</h5>
          <i className="fa-solid fa-trash-can" type='button' onClick={handleOnClick}></i>
        </div>
      </div>
    </>
  )
}

export default ListItem
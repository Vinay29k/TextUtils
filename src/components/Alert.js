import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}>

      {props.alert &&<div className="alert alert-success d-flex align-items-center" role="alert">
        <strong>{props.alert.type}</strong>{props.alert.msg}

      </div>}
    </div>
  )
}

import React from 'react'

export const Alert = (props) => {
  return (
   

props.mystr && <div className={`alert alert-${props.mystr.type} alert-dismissible fade show my-3`} role="alert">
    <strong >{props.mystr.type}</strong> : {props.mystr.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>


  )
}

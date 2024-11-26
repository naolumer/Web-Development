import React from 'react'

function Move() {
    function handleMove(){
        alert("stop hovering over me")
        console.log("dont move over me")
    }
  return (
    <div>
        <p onMouseOver={handleMove}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eum non modi quaerat ipsa. Nisi magni labore doloribus, inventore eveniet quae tempora obcaecati molestias, eligendi rerum nemo, rem repudiandae est?</p>
    </div>
  )
}

export default Move
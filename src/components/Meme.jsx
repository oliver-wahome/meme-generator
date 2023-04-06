import React from 'react'

function Meme() {
  return (
    <form>
        <div className="formInput">
            <input type="text" placeholder="top text" />
            <input type="text" placeholder="bottom text" />
        </div>
        <button type="submit" className="formBtn">Get a new meme image 🖼</button>
    </form>
  )
}

export default Meme
import React from 'react'

function Meme() {
  return (
    <div>
        <form>
            <div className="input">
                <input type="text" placeholder="top text" />
                <input type="text" placeholder="bottom text" />
            </div>
            <button type="submit" className="formBtn">Get a new meme image 🖼</button>
        </form>
    </div>
  )
}

export default Meme
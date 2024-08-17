import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center'>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full ">&copy; 2024 </button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className='card relative w-1/2 rounded-xl h-full bg-[#192826] flex justify-center items-center'>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full ">&copy; 2024 </button>
            </div>
            <div className='card relative w-1/2 rounded-xl h-full bg-[#004D43] flex justify-center items-center'>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full ">&copy; 2024 </button></div>
        </div>
    </div>
  )
}

export default Cards;
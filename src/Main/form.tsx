import React from 'react'

export default function Form() {
  return (
    <div className='md:w-1/2 w-auto h-full flex  justify-center'>
        <form className='w-[80%] md:h-[420px] h-auto p-[40px] shadow xl flex flex-col items-center mt-[180px] bg-white rounded-md'>
            <p className='font-bold text-[28px] my-[15px]'>Contact Us/ Napisz do nas:</p>
            <div className='my-[5px] flex flex-col justify-start w-full'>
                <label>Your name */Twoje imię *</label>
                <input className='border h-[40px] rounded-[7px]' type="text" required></input>
            </div>
            <div className='my-[5px] flex flex-col justify-start w-full'>
                <label>Your mail */Twój emial *</label>
                <input className='border h-[40px] rounded-[7px]' type="mail" required></input>
            </div>
            <div className='my-[5px] flex flex-col justify-start w-full'>
                <label>Your What's App number/Twój numer What's App</label>
                <input className='border h-[40px] rounded-[7px]' type="phone" required ></input>
            </div>
            <button className='bg-green-600 text-white w-full text-center py-[10px] rounded-md'>Send / Wyślij</button>
        </form>
    </div>
  )
}

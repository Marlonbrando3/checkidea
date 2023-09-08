import React from 'react'
import Claim from './claim'
import Form from './form'

export default function Mainview() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-auto h-screen w-full bg-[url('/bg-main.jpeg')] bg-cover">
        <Claim />
        <Form />
    </div>
  )
}

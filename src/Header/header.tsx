import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-white w-screen h-[150px] fixed flex items-center justify-center shadow'>
        <div className='mx-auto w-full md:w-[1240px] flex items-center justify-between'>
            <Image 
                src="/idea_logo.png"
                width={130}
                height={220}
                alt='logo'
            />
            <div>contact@checkidea.com.pl</div>
        </div>
    </div>
  )
}

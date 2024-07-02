
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'


const Sidebar = () => {


    return (
        <div className='hidden md:block w-[20%] h-fit border bordergray-300 bg-white rounded-lg'>

            <div className='text-xs'>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Post Impression</p>
                    <p className='text-blue-500 font-bold'>88</p>
                </div>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Posts</p>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
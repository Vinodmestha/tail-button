import React from 'react'

export default function TailButton({ label }) {
    return (
        <button className='border bg-blue-400 text-white py-2 px-5 rounded-full'>
            {label}
        </button>
    )
}

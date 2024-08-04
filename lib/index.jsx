import React from "react"
import "./index.css"

export default function TailButton({ label }) {
    return (
        <button className='border bg-blue-400 text-white py-2 px-5 rounded-full'>
            {label ?? "submit"}
        </button>
    )
}
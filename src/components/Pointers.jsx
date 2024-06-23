import { RiArrowUpSLine } from '@remixicon/react'
import React from 'react'

const Pointers = () => {
    return (
        <div className='pointers'>
            <p>Title</p>
            <input className='pointers-input' type="text" />
            <p>Content</p>
            <div className='pointer-tool'>
                <div className='tools'>
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Insert</span>
                    <span>Format</span>
                    <span>Tools</span>
                    <span>Table</span>
                    <span>Help</span>
                </div>

                <div className='pointer-icon'>
                    <img src="./Icon-1.png" alt="" />
                    <img src="./Icon-2.png" alt="" />
                    <img src="./Icon.png" alt="" />
                    <p>Paragraph</p>
                </div>
            </div>
        </div>
    )
}

export default Pointers
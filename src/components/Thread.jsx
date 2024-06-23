import { RiAddLargeLine, RiAddLine, RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react'
import React from 'react'

const Thread = () => {
    return (
        <div className='thread'>
            <h1><RiArrowUpSLine /> Thread A</h1>
            <div className='sub-thread-box'>
                <div className='sub-thread'>
                    <p>Sub Thread 1</p>
                    <input className='thread-input' placeholder='Enter text here' type="text" />
                </div>
                <div className='sub-interpretation'>
                    <p>Sub interpretation 1</p>
                    <input className='thread-input' placeholder='Enter text here' type="text" />
                </div>
            </div>

            <div className='thread-category'>
                <img src="./thread.png" alt="" />
                <p>Select Categ <RiArrowDownSLine /></p>
                <p>Select Process <RiArrowDownSLine /></p>
            </div>

            <div className='sub-thread-btn'>
                <button><RiAddLine color='white' /> Sub-thread</button>
            </div>

            <div className='summary'>
            <div className='sub-thread-summary'>
                    <p>Summary for Thread A</p>
                    <input className='summary-thread-input' placeholder='Enter text here' type="text" />
                </div>
            </div>
        </div>
    )
}

export default Thread
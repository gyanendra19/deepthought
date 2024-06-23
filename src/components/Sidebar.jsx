import { RiArrowLeftFill, RiArrowRightFill } from '@remixicon/react'
import React, { useState } from 'react'
import data from '../assets/data.json'

const Sidebar = () => {
    const value = data.tasks[0].assets
    const [showSidebar, setShowSidebar] = useState(false)
  return (
    <aside className={`sidebar ${showSidebar ? 'sidebar-animate' : ''}`}>
        <div className={`sidebar-head`}>
            {showSidebar ? (
                <span onClick={() => setShowSidebar(false)} className='arrow-right'><RiArrowLeftFill size={20}/></span>
            ) : (
                <span onClick={() => setShowSidebar(true)} className='arrow-right'><RiArrowRightFill size={20}/></span>
            )
        }
            </div>

        <div className={`sidebar-content ${showSidebar ? '' : 'hidden'}`}>
            <ul>
                <li>{data.tasks[0].task_title}</li>
                {value.map(asset => (
                    <li>{asset.asset_title}</li>
                ))}
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar
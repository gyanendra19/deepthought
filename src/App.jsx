import { useState } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import data from '../src/assets/data.json'
import Assets from './components/assets'
import Pointers from './components/Pointers'
import Thread from './components/Thread'
import Method from './components/Method'
import Management from './components/Management'

function App() {
  const assetOne = data.tasks[0].assets[0]
  console.log(assetOne);

  return (
    <>
      <Nav />
      <Sidebar />
      <div className='top'>
        <section className='head'>
          <div className='head-title'>
            <h1>{assetOne.asset_title}</h1>
            <button>Submit Task</button>
          </div>
          <div className='head-box'>
            <h2>{data.tasks[0].task_title}</h2>
            <p>{data.tasks[0].task_description}</p>
          </div>
          <div className='asset-container'>
            <Assets assetIndex={0} asset={<Management />} />
            <Assets assetIndex={1} asset={<Thread />} />
            <Assets assetIndex={2} asset={<Pointers />} />
            <Assets assetIndex={3} asset={<Method />} />
            <div className='blue-box'>
              <div className='blue-box-in'>
                <img src="./question.png" alt="" />
                <img src="./three.png" alt="" />
                <img src="./schedule.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

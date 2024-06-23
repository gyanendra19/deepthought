import React from 'react'
import data from '../assets/data.json'
import Thread from './Thread'
import Pointers from './Pointers'
import Method from './Method'

const Assets = ({assetIndex, asset}) => {
    const assets = data.tasks[0].assets

  return (
    <section className='asset-box'>
        <div className='asset-head'>
            <p>{assets[assetIndex].asset_title}</p>
            <span className='info'>i</span>
        </div>

        <div className='asset-description'>
            <p><span className='desc'>Description:</span> {assets[assetIndex].asset_description}</p>
        </div>

       {asset}
    </section>
  )
}

export default Assets
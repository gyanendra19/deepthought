import React from 'react'
import data from '../assets/data.json'
import ReactPlayer from 'react-player'

const Management = () => {
    const video = data.tasks[0].assets[0].asset_content
  return (
    <div>
      <iframe
        width="480"
        height="315"
        src={video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  )
}

export default Management
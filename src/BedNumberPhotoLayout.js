import React from 'react'
import image from "./images/Bed_layout.png"

const BedNumberPhotoLayout = ({setIsPhotoModalOpen}) => {    
  return (
    <div className='bed-layout' onClick={() => setIsPhotoModalOpen(false)}>
        <div className="tile">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default BedNumberPhotoLayout
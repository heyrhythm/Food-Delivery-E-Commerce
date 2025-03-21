import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='flex flex-col items-center text-center p-4'>
      <h3 className='text-lg font-semibold'>For Better Experience Download <br/><span className='text-red-500' >Tomato App </span></h3>
      <div className='flex gap-4 mt-3'>
        <img src={assets.play_store} alt='Play Store' className='w-32 cursor-pointer ' />
        <img src={assets.app_store} alt='App Store'className='w-32 cursor-pointer '  />
      </div>
    </div>
  )
}

export default AppDownload

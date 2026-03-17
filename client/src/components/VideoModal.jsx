import React from 'react'
import {X} from 'lucide-react';
export default function VideoModal({isOpen, onClose,videoUrl, title}) {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-60 bg-background flex items-center justify-center'>
<div>
    {/* Close button */}
    <button onClick={onClose}
    className='absolute top-4 ring-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors'
    >
        <X size={24}/>
    </button>

    {/* Video player */}
    <video src={videoUrl} controls autoPlay onEnded={onClose}
    className='w-full h-auto max-h-[85v] object-contain'
    >
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
    </video>

    {/* Title overlay */}
    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
        <h3 className='text-white text-xl font-semibold'>{title}</h3>
    </div>
</div>
    </div>
  )
}

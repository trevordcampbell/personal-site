import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const VideoThumbnail = ({ videoUrl }: {videoUrl: string}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoading, setLoading] = useState(true);

  // This function needs to be inside the component to be used as an inline event handler.
  const generateThumbnail = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        setThumbnailUrl(canvas.toDataURL('image/jpeg'));
      }
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={videoUrl}
        crossOrigin="anonymous" // Add this line
        style={{ display: 'none' }}
        preload="auto"
        onCanPlayThrough={generateThumbnail}
      />
      {thumbnailUrl && (
        <>
          {/* <img src={thumbnailUrl} alt="Video Thumbnail" className="w-full h-auto" /> */}
          <Image
            alt='video thumbnail'
            src={thumbnailUrl}
            width="0"
            height="0"
            sizes="100vw"
            loading='lazy'
            className={classNames('object-contain w-full h-full group-hover:opacity-70', isLoading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0')}
            onLoadingComplete={() => setLoading(false)}
          />
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayCircleIcon className='w-12 h-12 text-teal-600' />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoThumbnail;
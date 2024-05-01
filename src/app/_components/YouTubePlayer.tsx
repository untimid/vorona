import React, { useEffect, useRef, useState } from 'react'

export const YouTubePlayer = ({ videoSrc }) => {
  const [load, setLoad] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoad(true)
        observer.disconnect()
      }
    })

    observer.observe(videoRef.current)

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <div ref={videoRef}>
      {load ? (
        <iframe
          width="100%"
          height="300"
          // src={`https://www.youtube.com/embed/${videoId}`}
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Загружается...</div>
      )}
    </div>
  )
}

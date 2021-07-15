import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const AudioBar = () => {
  return (
    <>
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onPlay={(e) => console.log('onPlay')}
        layout="horizontal-reverse"
        showJumpControls={false}
        customAdditionalControls={[]}
      />
    </>
  )
}

export default AudioBar

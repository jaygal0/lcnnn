import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const AudioBar = ({ modal, audio }) => {
  return (
    <>
      <AudioPlayer
        src={audio}
        onPlay={(e) => console.log('onPlay')}
        layout="horizontal-reverse"
        showJumpControls={false}
        customAdditionalControls={[]}
        className={modal ? 'display-modal' : null}
        // autoPlay={modal ? true : false}
        // FIXME: Figure out the autoplay feature
      />
    </>
  )
}

export default AudioBar

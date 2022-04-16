import React, { useEffect, useRef, useState } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.3)',
    backdropFilter: 'blur(5px)',
    padding: '2rem',
    borderRadius: '2rem',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      height: '70%',
    },
  },
}))

const Player = ({
  songs,
  currentSongIndex,
  nextSongIndex,
  setCurrentSongIndex,
  setNextSongIndex,
}) => {
  const classes = useStyles()
  const audioElement = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play()
    } else {
      audioElement.current.pause()
    }
  })
  const SkipSong = (forwards = true) => {
    setIsPlaying(true)
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex
        temp++
        if (temp > songs.length - 1) temp = 0
        return temp
      })
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex
        temp--
        if (temp < 0) temp = songs.length - 1
        return temp
      })
    }
  }
  return (
    <Box className={classes.container}>
      <audio src={songs[currentSongIndex].src} ref={audioElement}></audio>
      <PlayerDetails isPlaying={isPlaying} song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
    </Box>
  )
}

export default Player

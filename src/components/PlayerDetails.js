import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  img_animation: {
    backgroundImage: (props) => `url(${props.song.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '20rem',
    height: '20rem',
    borderRadius: '100%',
    animation: '$spin 10s linear infinite',
  },
  img: {
    backgroundImage: (props) => `url(${props.song.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '20rem',
    height: '20rem',
    borderRadius: '100%',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const PlayerDetails = (props) => {
  const song = props.song
  const classes = useStyles({ song })
  return (
    <Box className={classes.details}>
      <Box
        className={props.isPlaying ? classes.img_animation : classes.img}
      ></Box>
      <Box sx={{ marginTop: '1.5rem' }}>
        <Typography variant='h5'>{song.title}</Typography>
      </Box>
      <Box>
        <Typography variant='h5'>{song.singer}</Typography>
      </Box>
    </Box>
  )
}

export default PlayerDetails

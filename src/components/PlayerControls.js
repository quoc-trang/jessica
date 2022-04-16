import { Box, IconButton } from '@mui/material'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded'
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded'
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '3rem !important',
    color: 'white',
  },
}))

const PlayerControls = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <IconButton onClick={() => props.SkipSong(false)}>
        <SkipPreviousRoundedIcon className={classes.icon} />
      </IconButton>
      <IconButton onClick={() => props.setIsPlaying(!props.isPlaying)}>
        {props.isPlaying ? (
          <PauseCircleOutlineRoundedIcon className={classes.icon} />
        ) : (
          <PlayCircleOutlineRoundedIcon className={classes.icon} />
        )}
      </IconButton>
      <IconButton onClick={() => props.SkipSong()}>
        <SkipNextRoundedIcon className={classes.icon} />
      </IconButton>
    </Box>
  )
}

export default PlayerControls

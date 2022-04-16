import { MenuList, Drawer, ListItemText, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
const useStyles = makeStyles((theme) => ({
  drawer: {
    position: 'absolute',
  },
  contain: { marginTop: '1rem' },
  paperDrawer: {
    backgroundColor: 'rgba(255,255,255,0.5) !important',
    backdropFilter: 'blur(5px)',
  },
}))

const PlayList = ({ songs, open, setOpen, setCurrentSongIndex }) => {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const handleClose = (tt) => {
    setOpen(false)
    setTitle(tt)
    setCurrentSongIndex(tt)
  }

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      className={classes.drawer}
      classes={{ paper: classes.paperDrawer }}
      anchor='left'
    >
      <MenuList className={classes.contain}>
        {songs.map((song, index) => (
          <MenuItem
            onClick={() => handleClose(index)}
            align='center'
            key={index}
          >
            <ListItemText sx={{ color: 'white' }}>{song.title}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Drawer>
  )
}

export default PlayList

import React, { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Player from './components/Player'
import background from './background.mp4'
import { Box, IconButton, Typography } from '@mui/material'
import PlayList from './components/PlayList'
import MenuIcon from '@mui/icons-material/Menu'
const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
})

const App = () => {
  const [open, setOpen] = useState(false)
  const [songs, setSongs] = useState([
    {
      title: 'Let me down slowly',
      image: './song_images/alecbenjamin.jpg',
      src: './songs/letmedownslowly.mp3',
      singer: 'Alec Benjamin',
    },
    {
      title: 'Love you like a love song',
      image: './song_images/selenagomez.jpg',
      src: './songs/loveyoulikealovesong.mp3',
      singer: 'Selena gomez',
    },
    {
      title: 'Past lives',
      image: './song_images/pastlives.jpg',
      src: './songs/pastlives.mp3',
      singer: 'Borns',
    },
    {
      title: 'Save your tears',
      image: './song_images/saveyourtears.jpg',
      src: './songs/saveyourtears.mp3',
      singer: 'The Weeknd',
    },
    {
      title: 'Take me to church',
      image: './song_images/takemetochurch.jpg',
      src: './songs/takemetochurch.mp3',
      singer: 'Hozier',
    },
    {
      title: 'Close to you',
      image: './song_images/closetoyou.jpg',
      src: './songs/closetoyou.mp3',
      singer: 'The Carpenters',
    },
    {
      title: 'Arcade',
      image: './song_images/arcade.jpg',
      src: './songs/arcade.mp3',
      singer: 'Duncan Laurence',
    },
    {
      title: 'After after party',
      image: './song_images/afterafterparty.jpg',
      src: './songs/afterafterparty.mp3',
      singer: 'Charli XCX Lil Yachty',
    },
    {
      title: 'Talking to the moon',
      image: './song_images/talkingtothemoon.jpg',
      src: './songs/talkingtothemoon.mp3',
      singer: 'Bruno Mars',
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <video
        style={{ minWidth: '100%', minHeigth: '100%', position: 'fixed' }}
        autoPlay
        loop
        muted
      >
        <source src={background} type='video/mp4' />
      </video>
      <PlayList
        open={open}
        setOpen={setOpen}
        songs={songs}
        setCurrentSongIndex={setCurrentSongIndex}
      />
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ position: 'absolute', top: '2%', zIndex: '1', left: '3%' }}
      >
        <MenuIcon
          sx={{ color: 'white', fontWeight: 'bold', fontSize: '3rem' }}
        />
      </IconButton>
      <Box
        sx={{
          position: 'fixed',
          minWidth: '100%',
          minHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Player
          songs={songs}
          currentSongIndex={currentSongIndex}
          nextSongIndex={nextSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          setNextSongIndex={setNextSongIndex}
        />
      </Box>
    </ThemeProvider>
  )
}

export default App

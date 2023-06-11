import { Button, ButtonGroup, Grid, Paper } from '@mui/material'
import './App.css'
import Appbar from './components/Appbar'
import { useState } from 'react'
import { Personas } from './modules/personas'
import { Numeros } from './modules/numeros'
function App() {
  const [first, setFirst] = useState(true)
  return (
    <>
      <Appbar />
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        sx={{
          marginTop: '20px'
        }}
      >
        <Grid item xs={10} md={6}>
          <ButtonGroup fullWidth variant="outlined" aria-label="outlined button group">
            <Button fullWidth onClick={() => setFirst(true)} >Números</Button>
            <Button fullWidth onClick={() => setFirst(false)} >Personas</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={10}>
          <Paper
            elevation={5}
            sx={{
              padding: '20px',
            }}
          >
            {first
              ? <Numeros />
              : <Personas />
            }
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default App

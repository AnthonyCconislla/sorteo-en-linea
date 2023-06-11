import { Grid, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Sortear } from "../personas/Sortear";
import { Persona } from "../personas/Persona";
import { useAlertMessage } from "../../context/notifications";

export const Numeros = () => {
    const [maximo, setMaximo] = useState(1)
    const [ganadores, setGanadores] = useState([])
    const { showError } = useAlertMessage()

    const borrarGanadores = (persona) => {
        setGanadores(ganadores.filter(row => row !== persona))
    }
    const sortear = () => {
        if (maximo > 0) {
            let random = Math.floor(Math.random() * maximo)
            while (ganadores.includes(random + 1) && ganadores.length < maximo) {
                random = Math.floor(Math.random() * maximo)
            }
            if (ganadores.length < maximo) {
                setGanadores([...ganadores, random + 1])
            } else {
                showError('No hay más ganadores')
            }
        } else {
            showError('Ingresa un número mayor a 0')
        }
    }
    return (
        <>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        size='small'
                        id="maximo"
                        label="N° máximo"
                        value={maximo}
                        onChange={(event) => {
                            setGanadores([])
                            setMaximo(event.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Sortear sortear={sortear} />
                </Grid>
                <Grid item xs={12}>

                    <Paper
                        elevation={5}
                        sx={{
                            padding: '20px',
                        }}
                    >
                        <Typography variant="h5" color="initial">Ganadores</Typography>
                        <Typography variant="subtitle1" color="initial">{ganadores.length} ganadores</Typography>
                        {
                            ganadores.length > 0
                            && ganadores.map((persona, index) => (
                                <Persona key={index} persona={persona} borrar={borrarGanadores} />
                            ))
                        }
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

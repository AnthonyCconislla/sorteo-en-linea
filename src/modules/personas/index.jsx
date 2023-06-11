import { Grid, Paper, Typography } from "@mui/material"
import { AddPersona } from "./AddPersona"
import { useState } from "react"
import { Persona } from "./Persona"
import { Sortear } from "./Sortear"
import { useAlertMessage } from "../../context/notifications"

export const Personas = () => {

    const [lista, setLista] = useState([])
    const [ganadores, setGanadores] = useState([])
    const { showError } = useAlertMessage()

    const agregar = (persona) => {
        if (lista.includes(persona)) {
            showError('Esta persona ya está participando')
        } else {
            setLista([...lista, persona])
        }
    }
    const borrar = (persona) => {
        setLista(lista.filter(row => row !== persona))
    }
    const borrarGanadores = (persona) => {
        setGanadores(ganadores.filter(row => row !== persona))
    }
    const sortear = () => {
        if (lista.length > 0) {
            const random = Math.floor(Math.random() * lista.length)
            const ganador = lista[random]
            borrar(ganador)
            setGanadores([...ganadores, ganador])
        } else {
            showError('no hay más participantes')
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
                    <AddPersona agregar={agregar} />
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
                <Grid item xs={12}>
                    <Paper
                        elevation={5}
                        sx={{
                            padding: '20px',
                        }}
                    >
                        <Typography variant="h5" color="initial">Participantes </Typography>
                        <Typography variant="subtitle1" color="initial">{lista.length} participantes</Typography>
                        {
                            lista.length > 0
                                ? lista.map((persona, index) => (
                                    <Persona key={index} persona={persona} borrar={borrar} />
                                ))
                                : <p> agregue personas</p>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

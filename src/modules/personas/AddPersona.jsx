import TextField from '@mui/material/TextField'
import { useState } from 'react';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useAlertMessage } from '../../context/notifications';

export const AddPersona = ({ agregar }) => {
    const [persona, setPersona] = useState('')
    const { showError } = useAlertMessage()

    const enviar = () => {
        if (persona.length > 0) {
            agregar(persona)
            setPersona('')
        } else {
            showError('Ingrese un participante')
        }
    }
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        size='small'
                        id="persona"
                        label="Nombre del persona"
                        value={persona}
                        onChange={(event) => {
                            setPersona(event.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.keyCode == 13) {
                                enviar()
                                // put the login here
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="primary" onClick={enviar}>
                        Agregar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

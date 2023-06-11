import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export const Persona = ({ persona, borrar }) => {
    return (
        <>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid item xs={9}>
                    <Typography variant="body1" color="initial">{persona}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <IconButton aria-label="" onClick={() => borrar(persona)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}

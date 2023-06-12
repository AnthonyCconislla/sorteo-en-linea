import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import icono from '../assets/icon.png'
import Grid from '@mui/material/Grid'

export default function Appbar() {
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar position="static">
                <Grid container spacing={1}>
                    <Grid item sx={{ margin: '5px 0px 0px 20px' }}>
                        <img src={icono} alt="sorteo en linea" width={50} />
                    </Grid>
                    <Grid item>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignItems: 'center' }}>
                                SORTEO EN LINEA
                            </Typography>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}
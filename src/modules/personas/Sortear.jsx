import Button from '@mui/material/Button'


export const Sortear = ({ sortear }) => {
    return (
        <>
            <Button fullWidth variant="contained" color="secondary" onClick={sortear}>
                Sortear
            </Button>
        </>
    )
}

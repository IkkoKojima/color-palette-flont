import React from 'react'
import { makeStyles, Theme, createStyles, Grid, Typography, Button, TextField } from '@material-ui/core'
import PaletteIcon from '@material-ui/icons/Palette';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dropArea: {
            width: "95vw",
            minHeight: "45vh",
            margin: "10px 0px",
            border: "5px solid gray",
            boxSizing: "border-box",
        },
        image: {
            width: "63vw",
        },
        textField: {
            width: "25vw"
        },
        button: {
            width: "25vw",
            background: "#ffffff",
        }
    }),
);

export default function Settings(imageUrl: string, onClick: (e: any) => void, visible: boolean) {
    const classes = useStyles()
    return (
        !visible ? <div /> :
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.dropArea}
            >
                <Grid item xs={8}>
                    <img className={classes.image} src={imageUrl} alt="選択された画像" />
                </Grid>
                <Grid
                    item
                    xs={4}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <TextField
                            disabled
                            type="number"
                            label="分割する色の数"
                            defaultValue={3}
                            variant="outlined"
                            inputProps={{ min: 1, max: 10, step: 1 }}
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            className={classes.button}
                            onClick={onClick}
                        >
                            <PaletteIcon />
                            <Typography variant="h6">パレットを生成</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid >
    )
}
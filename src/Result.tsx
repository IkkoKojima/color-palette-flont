import React from 'react'
import { makeStyles, Theme, createStyles, Grid, Typography, Button, Tooltip } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay';
import { Color } from './ColorPalette';
import { numberTo0xFF, copyToClipboard } from './Util'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dropArea: {
            width: "95vw",
            height: "45vh",
            margin: "10px 0px",
            border: "5px solid gray",
            boxSizing: "border-box",
        },
        paletteArea: {
            height: "40vh",
        },
        image: {
            width: "25vw",
            maxHeight: "35vh"
        },
        button: {

            background: "#ffffff",
        },
        tooltip: {
            textSize: 30
        },
        colorPalette: {
            color: "white",
            "&:hover": {
                color: "#FF0000"
            }
        }
    }),
);

export default function Result(imageUrl: string, palette: Color[], onClick: (e: any) => void, visible: boolean, size: number | undefined) {
    const classes = useStyles()
    return (
        !visible ? <div /> :
            <div style={{
                background: `url(${imageUrl}) center center no-repeat`,
                backgroundSize: "cover",
                width: size && (size < 1) ? "100vw" : `calc(75vh / ${size})`,
                height: size && (size < 1) ? `calc(${size} * 100vw)` : "75vh",
                maxHeight: "75vh",
                maxWidth: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Grid container direction="column" justify="center" alignItems="center">
                    {palette.map((color) => {
                        const percent: string = (Math.floor(color.percent * 100)).toString() + "%"
                        const rgb: string = "#" + numberTo0xFF(color.rgb[0]) + numberTo0xFF(color.rgb[1]) + numberTo0xFF(color.rgb[2])
                        return (
                            <Grid item>
                                <Tooltip placement="left" title={<div>クリックで<br />色をコピー</div>} arrow interactive className={classes.tooltip}>
                                    <Button
                                        className={classes.colorPalette}
                                        key={percent}
                                        style={{
                                            backgroundColor: rgb,
                                            opacity: "0.9"
                                        }}
                                        onClick={(e: any) => (copyToClipboard(rgb))}
                                    >
                                        <Typography variant="body1" style={{ padding: "0 5vw 0" }}>
                                            <strong>{rgb}</strong>
                                        </Typography>
                                    </Button>
                                </Tooltip>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
    )
}
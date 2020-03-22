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
            maxHeight: "40vh"
        },
        button: {
            width: "25vw",
            background: "#ffffff",
        },
        tooltip: {
            textSize: 30
        },
        colorPalette: {
            width: "60vw",
            color: "white",
            "&:hover": {
                color: "#FF0000"
            }
        }
    }),
);

export default function Result(imageUrl: string, palette: Color[], onClick: (e: any) => void, visible: boolean) {
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
                        <img className={classes.image} src={imageUrl} alt="選択された画像" />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            className={classes.button}
                            onClick={onClick}
                        >
                            <ReplayIcon />
                            <Typography variant="h6">最初からやり直す</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={8}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.paletteArea}
                >
                    {palette.map((color) => {
                        const percent: string = (Math.round(color.percent * 100)).toString() + "%"
                        const rgb: string = "#" + numberTo0xFF(color.rgb[0]) + numberTo0xFF(color.rgb[1]) + numberTo0xFF(color.rgb[2])
                        return (
                            <Tooltip placement="left" title={<div>クリックで<br />色をコピー</div>} arrow interactive className={classes.tooltip}>
                                <Button
                                    className={classes.colorPalette}
                                    key={percent}
                                    style={{
                                        backgroundColor: rgb,
                                        height: percent,
                                    }}
                                    onClick={(e: any) => (copyToClipboard(rgb))}
                                >
                                    <Typography variant="caption">
                                        {percent}  {rgb}
                                    </Typography>
                                </Button>
                            </Tooltip>
                        )
                    })}
                </Grid>
            </Grid >
    )
}
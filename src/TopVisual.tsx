import React from "react";
import { Typography, Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import logo from './images/logo.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        image: {
            width: "25vh",
        },
    }),
);

export default function TopVisual(handleClick: () => void) {
    const classes = useStyles()
    return (
        <Grid container direction="column" justify="center" alignItems="center" onClick={handleClick}>
            <Grid item>
                <img src={logo} className={classes.image} alt="logo" />
            </Grid>
            <Grid item>
                <Typography variant="h6">画像からカラーパレットを自動生成</Typography>
            </Grid>
        </Grid>
    )
}
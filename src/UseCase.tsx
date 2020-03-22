import React from "react";
import { Grid, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import sampleImg from "./images/sample.svg"
import samplePalette from "./images/palette.png"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "95vw",
        },
        image: {
            width: "23vw"
        },
        palette: {
            width: "23vw"
        },
        arrow: {
            fontSize: "8vw"
        }
    }))

export default function UseCase() {
    const classes = useStyles()
    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={3}>
                <Typography variant="body2" align="center">お好みの画像を選択してください</Typography>
                <img src={sampleImg} className={classes.image} />
            </Grid>
            <Grid item xs={1}>
                <ArrowForwardIcon className={classes.arrow} />
            </Grid>
            <Grid item xs={3}>
                <Typography variant="body2" align="center">カラーパレットが自動生成されます</Typography>
                <img src={samplePalette} className={classes.palette} />
            </Grid>
            <Grid item xs={1}>
                <ArrowForwardIcon className={classes.arrow} />
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body2" align="center">
                    <EmojiObjectsIcon fontSize="large" />
                    <br />
                    ご活用頂けます
                    <br />
                    <u>パワポ・スライド</u>の配色
                    <br />
                    <u>WEBサイト</u>のデザイン
                    <br />
                    <u>イラスト</u>の塗り色
                </Typography>
            </Grid>
        </Grid>
    )
}
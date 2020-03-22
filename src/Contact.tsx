import React from "react";
import { Grid, makeStyles, Theme, createStyles, Typography, Button, Link, Tooltip } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { copyToClipboard } from './Util'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "20px 0px",
            border: "2px solid gray",
            boxSizing: "border-box",
        },
    }))

export default function Contact() {
    const classes = useStyles()
    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={12}>
                <Typography
                    variant="body2"
                    align="center"
                >
                    <u>貴方の活用事例を紹介させてください！！</u>
                    <br />
                    本サービスを気に入っていただけましたら
                    <br />
                    <u>著作者名(ハンドルネーム)・元画像・パレット・創作物</u>の4点を
                    <br />
                    以下のスペースに掲載させていただけませんでしょうか？
                    <br />
                    ご連絡をお待ちしています☺️
                    <br />
                    <Tooltip title="Twitterに飛びます" arrow interactive>
                        <Link href="https://twitter.com/IkkoKojima">
                            <Button>
                                <TwitterIcon />
                            </Button>
                        </Link>
                    </Tooltip>
                    <Tooltip title="メールアドレスをコピーします" arrow interactive>
                        <Button onClick={() => { copyToClipboard("panteranerow.dev@gmail.com") }}>
                            <AlternateEmailIcon />
                        </Button>
                    </Tooltip>
                </Typography>

            </Grid>
        </Grid>
    )
}
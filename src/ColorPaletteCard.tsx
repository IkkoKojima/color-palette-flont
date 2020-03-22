import { Card, CardMedia, makeStyles, Theme, createStyles, CardContent, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { Color } from './ColorPalette';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxHeight: "100vh",
    },
    media: {
      height: "40vh",
    },
    content: {
      height: "40vh",
    },
  }),
);

export default function ColorPaletteCard(imgUrl: string, colors: Color[]) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgUrl}
      />
      <CardContent className={classes.content}>
        <Typography>画像から作られたカラーパレット</Typography>
        {colors.map((color) => {
          const percent: string = (color.percent * 100).toString() + "%"
          const rgb: string = "#" + numberTo0xFF(color.rgb[0]) + numberTo0xFF(color.rgb[1]) + numberTo0xFF(color.rgb[2])
          return (
            <Grid key={percent} style={{ backgroundColor: rgb, height: percent }}>
              <Typography>{percent}</Typography>
              <Typography>{rgb}</Typography>
            </Grid>
          )
        })}
      </CardContent>
    </Card>
  )
}

function numberTo0xFF(num: number): string {
  let f = parseInt(num.toString()).toString(16)
  if (f.length === 1) {
    f = "0" + f
  }
  return f.toUpperCase()
}
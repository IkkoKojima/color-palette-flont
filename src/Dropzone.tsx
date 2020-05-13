import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles, Theme, createStyles, Grid, Typography, Button } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dropArea: {
            background: "#f6c90e",
            color: "#ffffff",
            maxWidth: "95vw",
            minHeight: "45vh",
            margin: "10px 0px",
            border: "5px dashed gray",
            boxSizing: "border-box",
        },
        icon: {
            fontSize: "100px"
        },
        button: {
            background: "#ffffff",
        }
    }),
);

export default function Dropzone(onChange: (e: any) => void, visible: boolean) {
    const classes = useStyles()
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        !visible ? <div /> :
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.dropArea}
                {...getRootProps()}
            >
                <Grid item xs={12}>
                    <ImageIcon className={classes.icon}></ImageIcon>
                </Grid>
                <Grid item xs={12}>
                    <input {...getInputProps()} type="file" onChange={onChange} accept="image/*" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" className={classes.button}>
                        <ImageSearchIcon />
                        <Typography variant="h6">ファイルを選択</Typography>
                    </Button>
                </Grid>
            </Grid >
    )
}
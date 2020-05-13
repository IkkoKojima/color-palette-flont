import React, { useState } from 'react'
import { defaultPalette, Color } from './ColorPalette'
import { detectColor } from './ApiClient'
import { resizeImg } from './Util'
import defaultImage from './images/sample.svg'
import TopVisual from './TopVisual'
import Dropzone from './Dropzone'
import { Grid } from '@material-ui/core'
import Settings from './Settings'
import Result from './Result'
import UseCase from './UseCase'
import Contact from './Contact'

function App() {
  const [palette, setPalette] = useState<Color[]>(defaultPalette)
  const [url, setUrl] = useState<string>(defaultImage)
  const [mode, setMode] = useState<string>("input")
  const [image, setImage] = useState<File>()
  const [size, setSize] = useState<number>()

  function handleChange(e: any) {
    const file: File = e.target.files[0]
    setImage(file)
    setUrl(window.URL.createObjectURL(file))
    let img = new Image()
    img.onload = function () {
      console.log(img.naturalHeight / img.naturalWidth)
      setSize(img.naturalHeight / img.naturalWidth)
    }
    img.src = window.URL.createObjectURL(file)
    setMode("setting")
  }

  function handleClickSetting(e: any) {
    resizeImg(image!, 100, (data_uri_scheme) => {
      const base64 = data_uri_scheme.split(",")[1]
      detectColor(base64).then((palette) => { setPalette(palette) })
    })
    setMode("result")
  }

  function handleClickResult(e: any) {
    setMode("input")
  }

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        {TopVisual(() => { setMode("input") })}
        {Dropzone(handleChange, mode === "input")}
        {Settings(url, handleClickSetting, mode === "setting")}
        {Result(url, palette, handleClickResult, mode === "result", size)}
      </Grid>

    </div>
  );
}

export default App;

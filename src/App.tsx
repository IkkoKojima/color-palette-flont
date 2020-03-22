import React, { useState } from 'react'
import { defaultPalette, Color } from './ColorPalette'
import ColorPaletteCard from './ColorPaletteCard'
import { detectColor } from './ApiClient'
import { resizeImg } from './ImageFunctions'
import defaultImage from './images/sample.svg'
import TopVisual from './TopVisual'
import Dropzone from './Dropzone'
import { Grid } from '@material-ui/core'

function App() {
  const [data, setData] = useState<Color[]>(defaultPalette)
  const [url, setUrl] = useState<string>(defaultImage)

  function handleChange(e: any) {
    const file: File = e.target.files[0]
    setUrl(window.URL.createObjectURL(file))
    resizeImg(file, 100, (data_uri_scheme) => {
      const base64 = data_uri_scheme.split(",")[1]
      detectColor(base64).then((data) => { setData(data) })
    })
  }
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {TopVisual()}
      {Dropzone(handleChange)}
      {ColorPaletteCard(url, data)}
    </Grid>
  );
}

export default App;

import React, { useState } from 'react'
import { defaultPalette, Color } from './ColorPalette'
import ColorPaletteCard from './ColorPaletteCard'
import { Grid } from '@material-ui/core'
import { detectColor } from './ApiClient'
import {resizeImg} from './ImageFunctions'

function App() {
  const [data, setData] = useState<Color[]>(defaultPalette)
  const [url, setUrl] = useState<string>("")

  function handleChange(e: any) {
    const file:File = e.target.files[0]
    setUrl(window.URL.createObjectURL(file))
    resizeImg(file,100,(data_uri_scheme)=>{
      const base64 = data_uri_scheme.split(",")[1]
      detectColor(base64).then((data) => {setData(data)})
    })
  }
  return (
    <Grid
      container
      direction="column"
      justify="center"
    >
      <Grid item>
        <input type="file" onChange={handleChange} />
      </Grid>
      <Grid item>
        {ColorPaletteCard(url, data)}
      </Grid>
    </Grid>
  );
}

export default App;

import React, { useState } from 'react'
import { defaultPalette, Color } from './ColorPalette'
import ColorPaletteCard from './ColorPaletteCard'
import { Grid } from '@material-ui/core'
import { detectColor } from './ApiClient'

function App() {
  const createObjectURL = (window.URL || window.webkitURL).createObjectURL;
  const [data, setData] = useState<Color[]>(defaultPalette)
  const [url, setUrl] = useState<string>("")

  function handleChange(e: any) {
    const file = e.target.files[0]
    const fileUrl = createObjectURL(file)
    setUrl(fileUrl)
    detectColor(file)
    .then((data) => {
      setData(data)
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

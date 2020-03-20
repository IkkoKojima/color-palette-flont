import axios from 'axios'
import { Color } from './ColorPalette'

export function detectColor(imgBase64: string): Promise<Color[]> {
  return axios({
    method: "POST",
    // url: 'https://color-palette-brgqt5m77a-an.a.run.app/',
    url: 'http://127.0.0.1:5000/',
    responseType: "json",
    data:{
      image64:imgBase64
    }
  })
    .then(function (response) {
      return response.data
    })
}
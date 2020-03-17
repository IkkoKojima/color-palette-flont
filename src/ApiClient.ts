import axios from 'axios'
import { Color } from './ColorPalette'

export function detectColor(file: any): Promise<Color[]> {
  const formData = new FormData();
  formData.append('file', file)
  return axios({
    method: "POST",
    // url: 'https://color-palette-brgqt5m77a-an.a.run.app/',
    url: 'http://127.0.0.1:5000/',
    data: formData,
    responseType: "json"
  })
    .then(function (response) {
      console.log(response.data);
      return response.data
    })
}
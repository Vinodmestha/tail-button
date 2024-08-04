import {resolve} from 'path'

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/app.jsx"),
      name: 'tail-button',
      fileName: "tail"
    }
  }
}

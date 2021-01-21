import {Fragment} from 'react'
import {createGlobalStyle} from 'styled-components'

import Canvas from './components/canvas/Canvas'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Canvas />
    </Fragment>
  )
}

export default App

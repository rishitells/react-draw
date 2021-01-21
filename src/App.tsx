import {Fragment} from 'react'
import {createGlobalStyle} from 'styled-components'

import DrawArea from './components/drawArea/DrawArea'

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
      <DrawArea />
    </Fragment>
  )
}

export default App

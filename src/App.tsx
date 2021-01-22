import {Fragment} from 'react'
import {createGlobalStyle} from 'styled-components'

import WorkArea from './components/workArea/WorkArea'

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
      <WorkArea />
    </Fragment>
  )
}

export default App

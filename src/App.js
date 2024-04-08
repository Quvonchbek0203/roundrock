import React, { Suspense, lazy } from 'react'
import Loader from './components/Loader'

const Main = lazy(()=> import('./pages/main/main'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Main/>
      </Suspense>
    </div>
  )
}

export default App

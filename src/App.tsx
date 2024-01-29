import './App.css'
import LoginScreen from './modules/cotization/pages/Login/LoginScreen'
import { Route, Routes } from 'react-router-dom'
import PlansAndCoverageScreen from './modules/cotization/pages/PlansAndCoverage/PlansAndCoverageScreen'
import InsuranceSummary from './modules/cotization/pages/InsuranceSummary/InsuranceSummary'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element= { <LoginScreen/>}/>
    <Route path='/PlanesyCoberturas' element= { <PlansAndCoverageScreen/>}/>
    <Route path='/ResumenDelSeguro' element= { <InsuranceSummary/>} />
    </Routes>
    </>
  )
}

export default App

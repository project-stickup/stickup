
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StickyBoard from './components/stickyBoardComponent/stickyBoardComponent'
import './App.css'

function App() {


  return (
    <>
    <h1 className='stickupTitle'>Stickup</h1>
      <div className="card">
        <StickyBoard name="myboard1"/>
      </div>
    </>
  )
}

export default App

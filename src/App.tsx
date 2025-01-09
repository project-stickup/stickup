
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StickyBoard from './components/stickyBoardComponent/stickyBoardComponent'
import './App.css'

function App() {


  return (
    <>
      <div className="card">
        <h2>
          Multi-user sticky notes app
        </h2>
        <StickyBoard name="myboard1"/>
      </div>
    </>
  )
}

export default App

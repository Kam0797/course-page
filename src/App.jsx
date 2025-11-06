import './App.css'
import Courses from './components/views/courses/Courses'
import Mentors from './components/mentors/Mentors'
import Sidebar from './components/sidebar/Sidebar'
import TopBar from './components/top-bar/TopBar'
import { ContextProvider } from './Context'

import "@fontsource/nunito/latin.css"

function App() {

  return (
    <>
    <ContextProvider>
      <Sidebar />
      <TopBar />
      <Courses />
      <Mentors />
    </ContextProvider>
    </>
  )
}

export default App

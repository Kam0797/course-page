import './App.css'
import Courses from './components/views/courses/Courses'
import Mentors from './components/views/courses/mentors/Mentors'
import Sidebar from './components/sidebar/Sidebar'
import TopBar from './components/top-bar/TopBar'
import { ContextProvider } from './Context'

import "@fontsource/nunito/latin.css"
import LearningProgress from './components/views/courses/learning-progress/LearningProgress'

function App() {

  return (
    <>
    <ContextProvider>
      <Sidebar />
      <Courses />
    </ContextProvider>
    </>
  )
}

export default App

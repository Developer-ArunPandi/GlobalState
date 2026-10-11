import './App.css'
import  StudentProvider  from './components/reducer-managed/StudentProvider'
import StudentSummary from './components/reducer-managed/StudentSummary'
// import UniqueKeys from './components/UniqueKeys.jsx'
// import IndexKeys from './components/IndexKeys.jsx'
// import StudentProgressTracker from './components/StudentProgressTracker.jsx'
// import ThemeToggle from './components/ThemeToggle.jsx'
// import Dashboard from './components/Dashboard.jsx'
// import StudentsDetails from './components/StudentsDetails.jsx'

function App() {

  return (
    <>
    <StudentProvider>
     {/* <StudentsDetails/> */}
     {/* <Dashboard/> */}
     {/* <ThemeToggle/> */}
     {/* <StudentProgressTracker/> */}
      {/* <UniqueKeys/>
      <IndexKeys/> */}
      <StudentSummary/>
    </StudentProvider>
    </>
  )
}

export default App

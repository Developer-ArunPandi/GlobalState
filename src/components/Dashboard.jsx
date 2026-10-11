import CohortSummary from './CohortSummary'
import Footer from './Footer'
import Header from './Header.jsx'
import StudentList from './StudentList'

const Dashboard = () => {
  return (
    <>
           <Header/>
     <CohortSummary/>
     <StudentList/>
     <Footer/>
    </>
  )
}

export default Dashboard

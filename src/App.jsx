import Navbar from './components/navbar'
import BlogPage from './pages/blogPage'
import LandingPage from './pages/landingPage'

export default function App() {
  return (
    <>
      <div className="font-Inter">
        <div className="fixed z-20">
          <Navbar />
        </div>
        <LandingPage />
        <BlogPage />
      </div>
    </>
  )
}

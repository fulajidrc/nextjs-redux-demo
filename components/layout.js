import Navbar from './navbar'
import Footer from './footer'
import { useSelector } from 'react-redux'

export default function Layout({ children }) {
  const settings = useSelector(state => state.setting)
  const {darkMode} = settings
  return (
    <>
      <div className={darkMode ? 'dark' : 'light'}
>
        <Navbar />
        <div className="flex flex-row text-gray-700 bg-gray-200 dark:bg-gray-900 px-4 py-4 pt-24 h-screen overflow-auto">
              <main className='w-full h-full'>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}
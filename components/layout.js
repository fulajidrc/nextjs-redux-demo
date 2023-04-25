import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-row h-full text-gray-700 bg-gray-200 px-4 py-4">
            <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
// import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/NavBar'
import Footer from './Footer'
import Navbar_1 from './Navbar/Navbar_1';

function Layout(props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPageSlug={props.currentPageSlug}/>
      <main className="flex-grow">
        {/* <Outlet /> */}
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;



const theme = [
  {
    range: [0, 40], // From 0px to 40px scroll
    background: 'bg-transparent', // Tailwind class for transparent background
    text: 'text-gray-700', // Text color
  },
  {
    range: [41, 300], // From 41px to 300px scroll
    background: 'bg-purple-800', // Dark purple background
    text: 'text-white', // White text color
  },
  {
    range: [301, Infinity], // From 301px onward
    background: 'bg-white', // White background
    text: 'text-black', // Black text color
  },
];
import Navbar from "../Navbar/Navbar"

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Navbar />
            <main>{ children }</main>
        </>
    )
  }
  
  export default Layout
  
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Layout({children}){
return(
    <div className="Content">
    <Topbar/>
    <Navbar/>
    <main>{children}</main>
   
    <Footer/>
</div>
)
}
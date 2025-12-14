import Container from "../shared/Container"
import logo from "../../assets/Screenshot 2025-09-11 1312121.png"
import Navitem from "../shared/Navitems"
import { navItems } from "./Navbar"


const Footer = () => {
 
    return(<footer className="relative pt-28 rounded-t-3xl bg-box-bg">
        <Container className="pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <img src={logo} className="w-7 h-7 rounded-full" alt="HHH"></img>
                    <span className="text-lg font-semibold text-heading-1">Hamdail power</span>
                </div>
                <ul className="flex gap-6 text-heading-1">
                    {navItems.map((item, key) => (
                        <Navitem key={key} href={item.href} text={item.text}/>
                    ))}
                </ul>
            </div>
        </Container>
    </footer>)
}
export default Footer


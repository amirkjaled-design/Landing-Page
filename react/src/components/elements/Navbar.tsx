import Container from "../shared/Container";
import logo from "../../assets/Screenshot 2025-09-11 1312121.png";
import Navitems from "../shared/Navitems";
import BtnLink from "../shared/BtnLink";
import useThemeStore from "../../store/ThemeStore";

export const navItems = [{href: "#", text: "Home"}, {href: "#services", text: "Services"}, {href: "#about-us", text: "About us"}, {href: "#pricing", text: "Pricing"}];
const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();
 return(<>
    <header className="absolute inset-x-0 top-0 z-50 py-6">
        <Container>
            <nav className="w-full flex justify-between gap-6 relative">
                <div className="min-w-max inline-flex relative">
                    <a href="/" className="relative flex items-center gap-3">
                        <img src={logo} alt="landing" className="w-12 h-12 rounded-full" />
                        <div className="inline-flex text-lg font-semibold text-heading-1">Hamdail Power</div>
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
                    <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                      {navItems.map((item, key) => (
                        <Navitems href={item.href} text={item.text} key={key}></Navitems>
                      ) )}
                    </ul>
                    <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0"> 
                        <BtnLink text="Get Started" href="#cta" className=""/>
                    </div>
                </div>
                <div className="min-w-max flex items-center gap-x-3">
                    <button onClick={toggleTheme} className="outline-hidden flex relative text-heding-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer">
                        {theme === "dark" ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill text-white" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>)
                        }
                    </button>
                </div>
            </nav>
        </Container>
        </header>
 </>)
}
export default Navbar

/*

*/
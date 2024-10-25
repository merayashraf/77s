import NavBar from "@/components/navBar/navBar";
import HeroSections from "@/components/homePage/heroSection/heroSections";
import Categories from "@/components/homePage/categories/categories";
import Experience from "@/components/homePage/experience/experience";
import Hiring from "@/components/homePage/hiring/hiring";
import ContactUs from "@/components/homePage/contactUs/contactUs";
import Footer from "@/components/footer/footer";





export default function Home() {
  return (
    <div className="w-[99.9%] overflow-hidden flex flex-col font-rotunda">
        <NavBar/>
        <HeroSections/>
        <Categories/>
        <Experience/>
        <Hiring/>        
        <ContactUs/>
        <Footer/>
    </div>
  );
}
import Header from "../Header";
import NavBar from "../NavBar";
import Contact from "../Contact";

const LeftSection = () => {
    return(
           <div className="px-3">
        <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_40%_25%] h-[90vh]">
          <Header/>
          <NavBar/>
          <Contact/>
        </div>
      </div> 
    )
}

export default LeftSection
import NavBar from "../Navbar";
import CountriesList from "../CountriesList";

function Home(props){
    
    return(
        <div>
            <NavBar/>
            <div className="divRow">
                <CountriesList paises={props.paises}  setPaises={props.setPaises} fetching={props.fetching} bpaises={props.bpaises}/>
                {/* <CountryDetails data={props.data}/> */}
            </div>
            
        </div>
        
    )
}
export default Home;
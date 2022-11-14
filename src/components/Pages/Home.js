import NavBar from "../Navbar";
import CountriesList from "../CountriesList";
import CountryDetails from "../CountryDetails";
import {useState, useEffect} from 'react'
function Home(props){
    
    return(
        <div>
            <NavBar/>
            <div className="divRow">
                <CountriesList data={props.data} fetching={props.fetching}/>
                {/* <CountryDetails data={props.data}/> */}
            </div>
            
        </div>
        
    )
}
export default Home;
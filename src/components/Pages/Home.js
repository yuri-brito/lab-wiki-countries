import NavBar from "../Navbar";
import CountriesList from "../CountriesList";
import CountryDetails from "../CountryDetails";
import {useState, useEffect} from 'react'
function Home(props){
    
    return(
        <div>
            <NavBar/>
            <div className="divRow">
                <CountriesList data={props.data}/>
                <CountryDetails data={props.data}/>
            </div>
            
        </div>
        
    )
}
export default Home;
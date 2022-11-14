import NavBar from "./Navbar";
import CountriesList from "./CountriesList";
import {useParams, Link} from 'react-router-dom'
import { useState,useEffect } from "react";
import {Spinner} from 'react-bootstrap'
import './CountyDetails.css'
import axios from "axios";
function CountryDetails(props){
    const [foundPais, setFoundPais]=useState({})
    const [fetching, setFetching]=useState(true)
    let{id}=useParams();
    const paises=props.data
    const arrayborders=[]
    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then((res) => {
                setFoundPais(res.data)
                setFetching(false)
                console.log(foundPais)
                console.log(foundPais.borders)
            })
            .catch(err=>console.log(err))
    },[])
    console.log(foundPais)
    console.log(foundPais.borders)
            
    return(
        <div>
            {/* <NavBar/>
            <div className="divRow">

                <CountriesList data={paises}/>
                {fetching&&<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>}
                <div className="countryDetails">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundPais.alpha2Code.toLowerCase()}.png`} width={100}/>
                    <h2>
                        {foundPais.name.common}
                    </h2>
                    <table>
                        <tbody>

                            <tr>
                                <td width={200}>
                                    Capital
                                </td>
                                <td width={200}>
                                    {foundPais.capital[0]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Área
                                </td>
                                <td>
                                {foundPais.area} km
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Borders
                                </td>
                                <td className="celula">
                                    {arrayborders}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
            </div> */}

    </div>
    )
}
export default CountryDetails;
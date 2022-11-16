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
    const paises=props.paises
    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then((res) => {
                setFoundPais(res.data)
                setFetching(false)
            })
            .catch(err=>console.log(err))
    },[id])
    
    
    return (
        <div>
            <NavBar/>
            <div className="divRow">
                <CountriesList paises={props.paises}  setPaises={props.setPaises} fetching={props.fetching} bpaises={props.bpaises}/>
                {fetching?<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>:
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
                                {foundPais.area} km<sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Região
                                </td>
                                <td>
                                {foundPais.region}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sub Região
                                </td>
                                <td>
                                {foundPais.subregion}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Moeda
                                </td>
                                <td>
                                {foundPais.currencies?Object.values(foundPais.currencies)[0].name:'-'}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Símbolo
                                </td>
                                <td>
                                {foundPais.currencies?Object.values(foundPais.currencies)[0].symbol:'-'}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Idiomas
                                </td>
                                <td>
                                {foundPais.languages?Object.values(foundPais.languages).map((obj)=>{return <p key={Object.values(foundPais.languages).indexOf(obj)} style={{margin:'0'}} >{obj}</p>}):'-'}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Borders
                                </td>
                                <td className="celula">
                                    {foundPais.borders.length===0?<div>-</div>:
                                    foundPais.borders.map((border)=>{
                                        
                                        let paisBorder=props.bpaises.find((pais)=>pais.alpha3Code===border)
                                        return(
                                            <Link to={`/${border}`} key={foundPais.borders.indexOf(border)} >{paisBorder.name.common}</Link>
                                        )
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
                }
            </div>

    </div>
    )
    
}
export default CountryDetails;
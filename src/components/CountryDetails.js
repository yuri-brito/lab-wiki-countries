import NavBar from "./Navbar";
import CountriesList from "./CountriesList";
import {useParams, Link} from 'react-router-dom'

import './CountyDetails.css'
function CountryDetails(props){
    let{id}=useParams();
    if (id===undefined){
        return(
            <div style={{width:400}}></div>
        )
        
    }else{
        const paises=props.data
        const foundPais=paises.find((s)=>{
            return s.alpha3Code===id;
        })
    
        
        const arrayborders=[]
        if (foundPais.borders.length===0){
            arrayborders.push('-')
        }else{
            for (let border of foundPais.borders){
                let paisBorder=paises.find((oneRecipe) => {
                    return oneRecipe.alpha3Code === border;
                })
                arrayborders.push(<Link key={foundPais.borders.indexOf(border)} to={`/${border}`}>{paisBorder.name.common}</Link>)
            }
        }
    
        return(
            <div>
                <NavBar/>
                <div className="divRow">
    
                    <CountriesList data={paises}/>
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
                    </div>
    
            </div>
        )
    }
}
export default CountryDetails;
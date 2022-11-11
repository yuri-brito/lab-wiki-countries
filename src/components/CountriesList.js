import {ListGroup, ListGroupItem} from 'react-bootstrap'
import './CountryList.css'
import {Link} from 'react-router-dom'
function CountriesList(props){
    
    let listaPaises=[]
    for (let pais of props.data){
        listaPaises.push(<Link key={props.data.indexOf(pais)} style={{textDecoration:'none'}} to={`/${pais.alpha3Code}`}><ListGroupItem><img src={`https://flagpedia.net/data/flags/icon/72x54/${pais.alpha2Code.toLowerCase()}.png`} width={30}/><p>{pais.name.common}</p></ListGroupItem></Link>)
    }

    return(
        <ListGroup>
           <div className='divList'> 
                {listaPaises}
           </div>
           
        </ListGroup>
    )
}
export default CountriesList;
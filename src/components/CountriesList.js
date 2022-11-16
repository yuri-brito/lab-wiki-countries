import {ListGroup, ListGroupItem,Spinner, InputGroup,Form} from 'react-bootstrap'
import './CountryList.css'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

function CountriesList(props){
    function pesquisar(e){
        if (e.target.value===''){
            props.setPaises(props.bpaises)
            
        }else{
            props.setPaises([...props.bpaises].filter((obj)=>{
                console.log(obj.name.common)
                console.log(e.target.value)
                return obj.name.common.toLowerCase().includes(e.target.value.toLowerCase())}))
            }
        }  
    return(
        <ListGroup>
            {props.fetching&&<div className='divList'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>}
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Pesquisar"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={pesquisar}
                />
            </InputGroup>
            <div className='divList scrollbar-primary'> 
                    {props.paises.map((pais)=>{return <Link key={props.paises.indexOf(pais)} style={{textDecoration:'none'}} to={`/${pais.alpha3Code}`}><ListGroupItem><img src={`https://flagpedia.net/data/flags/icon/72x54/${pais.alpha2Code.toLowerCase()}.png`} width={30}/><p>{pais.name.common}</p></ListGroupItem></Link>})
                }
            </div>
           
        </ListGroup>
    )
}
export default CountriesList;
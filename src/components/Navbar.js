import { Container, Navbar} from 'react-bootstrap'
import './Navbar.css'
function NavBar(){
    return(
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                
                <Navbar.Brand style={{fontSize:40,color:'white',marginLeft:100}} href="/">WikiCountries</Navbar.Brand>
                
            </Container>
        </Navbar>
    )
}
export default NavBar;
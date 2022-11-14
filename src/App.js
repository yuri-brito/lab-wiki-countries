import logo from './logo.svg';
import './App.css';
import{Routes,Route} from 'react-router-dom'
import About from './components/Pages/About'
import Error from './components/Pages/Error';
import Home from './components/Pages/Home';
import CountryDetails from './components/CountryDetails';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
function App() {
  const[paises,setPaises]=useState([])
  const[fetching,setFechting]=useState(true)
    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
           .then((res) => res.json())
           .then((data) => {
                data.sort((a,b)=>{
                    const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
                    if (nameA > nameB) {
                      return 1;
                    }
                    if (nameA < nameB) {
                      return -1;
                    }
                    return 0;
                  })
                setPaises(data);
                setFechting(false)
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
     
  return (
    <div className="App">
      
      <Routes>
        <Route  path="/" element={<Home data={paises} fetching={fetching}/>}/>
        <Route  path="/sobre" element={<About/>}/>
        <Route path="/:id" element={<CountryDetails data={paises} />}/>
        <Route  path="*" element={<Error/>}/>
      </Routes>  

    </div>
  );
}

export default App;

import React, {Component} from 'react';
import Records from './records';
import auth from './auth';
import { Redirect } from "react-router-dom";
import Nav from './nav';

class Search extends Component {  
    constructor(props){
        super(props);
        
        this.state = {
            search: '',
            planets: [],
            isloggedIn : true
        };       
      
        this.loadDataFromAPI = this.loadDataFromAPI.bind(this);       
        this.handleSearch = this.handleSearch.bind(this);        
    }

    handleSearch = (e) => {
        e.preventDefault();  
        this.setState({search: e.target.value});    
    }

    loadDataFromAPI = () => {
        fetch('https://swapi.dev/api/planets')
          .then(response => response.json())
          .then(data => this.setState({ planets: data.results }));
    } 
    
    componentDidMount() {
        this.loadDataFromAPI();
    }  
    
    render(){
        console.log(window.sessionStorage.getItem('auth'));
        const search = this.state.search;
        const planets = this.state.planets;
        console.log(this.state.isloggedIn);
        if(this.state.isloggedIn == false) {
            return <Redirect to="/login" />
        }
        return (
            <React.Fragment>   
                <Nav />
            <div className="search-time">

                <h1>Search</h1>
                <div>
                    <label>Search</label>
                    <input type="text" name="search" onChange={this.handleSearch} />
                </div>         

                <table cellPadding="0" cellSpacing="0" width="100%">
                    <tbody>
                    <tr>
                        <th>Name</th>                       
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                        <th>Terrain</th>
                        <th>Surface Water</th>
                        <th>Population</th>
                    </tr>
                    {
                        planets && planets.filter(planet => {
                            return ((planet.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ) ||
                            (planet.population.indexOf(search.toLowerCase()) >= 0 ))
                        }).map((planet, index) => <Records key={planet.name} {...planet} />)                        
                    }
                    </tbody>
                </table>
            </div>
            </React.Fragment>
          );
    }
  
}

export default Search;

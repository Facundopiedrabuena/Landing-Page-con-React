import React from "react";
import Mynavbar from './navbar.jsx';
import Myjumbo from './jumbotron.jsx';
import MyCard from './cartas.jsx';
import MyFooter from './footer.jsx';

//create your first component
const Home = () => {
	return [
		<Mynavbar/>,
		<Myjumbo/>,
        <MyCard/>,
        <MyFooter/>
	]
   
	;

};

export default Home;

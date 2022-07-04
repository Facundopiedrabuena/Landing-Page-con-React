import React from "react";
import Mynavbar from './navbar.jsx';
import Myjumbo from './jumbotron.jsx';
import MyCard from './cartas.jsx';
import MyFooter from './footer.jsx';

//create your first component
const Home = () => {
	return (
		<div>	<div>
			<Mynavbar />
		</div>
			<div >
				<Myjumbo />
			</div>
			<div className="container">
				<div className=" align-items-center justify-content-center flex-wrap d-flex" >
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
				</div>
			</div>

			<div>
				<MyFooter />
			</div>

		</div>

	)

		;

};

export default Home;

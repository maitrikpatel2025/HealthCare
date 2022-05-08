import BreastCancer from "./component/BreastCancer/BrestCancer";
import Home from "./component/Home/Home";

const routes = [
	{path: '/', compName: <Home/>},
	{path: '/breastcancer', compName : <BreastCancer/>},
]
export default routes;
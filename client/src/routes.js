import BreastCancer from "./component/BreastCancer/BrestCancer";
import Diabetes from "./component/Diabetes/Diabetes";
import Home from "./component/Home/Home";

const routes = [
	{path: '/', compName: <Home/>},
	{path: '/breastcancer', compName : <BreastCancer/>},
	{path:'/diabetes', compName: <Diabetes/>}
]
export default routes;
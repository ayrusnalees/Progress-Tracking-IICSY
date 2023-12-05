import { BrowserRouter,Routes,Route } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";

const App=()=>{
    
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route> 
        </Routes>
        </BrowserRouter>
    )
}
export default App
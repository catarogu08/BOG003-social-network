// Este es el punto de entrada de tu app
//import { myFunction } from "./lib/index.js";
//myFunction();


import { registerUser } from "../../lib/views/templateRegister.js";
import { userExist } from '../../lib/views/templateLogin.js';
import { home } from "../../lib/views/templateHome.js";


document.getElementById('root').innerHTML = registerUser();
//document.getElementById('root').innerHTML = userExist();
//document.getElementById('root').innerHTML = home();

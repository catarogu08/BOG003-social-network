// Este es el punto de entrada de tu app
import { myFunction } from "./lib/index.js";
import { registerUser }from "./view/templateRegister.js";


myFunction();
document.getElementById("root").innerHTML = registerUser();
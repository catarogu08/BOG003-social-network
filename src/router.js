import { registerUser } from './lib/views/templeRegister.js';
import { userExist } from './lib/views/templateLogin.js';


export const changeRoute = (hash) => {
    if (hash === '#/register') {
        return showTemplate(hash)
    }
    else if (hash === '#/logIn') {
        return showTemplate(hash)
    }
};

const showTemplate = (hash) =>{

}
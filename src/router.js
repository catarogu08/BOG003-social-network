import { registerUser } from './lib/views/templateRegister.js';
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
    const showRegister = registerUser;
    const showUserExist = userExist;

}
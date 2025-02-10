import { comparePassword, hashPassword } from "../Authentication/bcrypt.js";
import { genrateToken, veriFyJwtToken } from "../Authorization/jwtToken.js";
import {
    getAllUser,
    userCreateServices,
    userLoginServices,
} from "../services/userService.js";

export let register = async (req, res) => {
    let { username, mobile, email, password } = req.body;
    console.log(
    `user ${username}, mobile${mobile},email ${email},password ${password}`);
    try {
    let hash = await hashPassword(password);
    console.log(hash);
    let userCreate = await userCreateServices(username, mobile, email, hash);
    if (userCreate) {
    res.send(`userCreate created succesfully ${userCreate}`);
    } else {
    res.send(`userCreate not create`);
    }
    } catch (error) {
    console.log(`error occured at user ${error.message}`);
    }};

export let userLogin = async (req, res) => {
let { email, password } = req.body;
console.log(req.body);
try {
    let dbPaassword = await userLoginServices(email);
    let log = await comparePassword(password, dbPaassword);
    let token = await genrateToken(email, process.env.PRIVATEKEY);
    console.log(log);
    if (log) {
res.send(`user login succesfull! ${token}`);
    } else {
res.send(`user login failed!`);
    }
} catch (error) {
    console.log(`error occured at userlogin ${error.message}`);
}
};

export let getProfile = async (req, res) => {
    let getToken = req.headers["authorization"];
    console.log(getToken);
try {
    let verifyjwt = await veriFyJwtToken(
    getToken.split(` `)[1],
    process.env.PRIVATEKEY
    );
    if (verifyjwt) {
    let allUserData = await getAllUser();

    res.send(`token verify successfully  ${allUserData}`);
    } else {
    res.send(`token verify failed `);
    }
    } catch (error) {
    console.log(`error occured at  getProfile${error.message}`);
    }
};

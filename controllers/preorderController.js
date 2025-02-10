import { preorderservices } from "../services/preorderService.js";

export let preordercontoller = async (req, res) => {
    let { name, mobile, quantity, description } = req.body;
    console.log(
    `user ${name} mobile ${mobile} quantity ${quantity}  description ${description}`);
try {
    let preorder = await preorderservices(name, mobile, quantity, description);
    if (preorder) {
    res.send(`preorder create successfully ${preorder}`);
    } else {
    res.send(`preorder not created`);
    }
} catch (error) {
    console.log(`error occured at preordercontoller ${error.message}`);
}
};

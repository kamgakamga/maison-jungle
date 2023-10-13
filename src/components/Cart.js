import "../styles/Cart.css";

function Cart() {
        const title = "La maison jungle";
        const nameMonstera = 'Monstera';
        const nameLierre = 'Lierre';
        const nameFleurs = 'Fleurs';
        const prixMonstera = 8;
        const prixLierre = 10;
        const prixFleurs = 15;
return (
<ul className="lmj-cart">
       <li>{nameMonstera}:<strong>{prixMonstera}</strong></li>
       <li>{nameLierre}:<strong>{prixLierre}</strong></li>
       <li>{nameFleurs}:<strong>{prixFleurs}</strong></li>
       <span>TOTAL= <strong>{prixFleurs + prixLierre + prixMonstera}</strong></span>
      
</ul>
);
}
    
    export default Cart
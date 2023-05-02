import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import mov from "../images/MOV.svg"
import "../css/Footer.css"


const Footer = () => {
    return ( 
<section className="footer">
    <div className="footerwrapper">
        <div className="footerlogo">
            <img src={mov} alt="mov logo" />
            <h5>Imprint</h5>
        </div>
        <div className="sociallinks">
            <a href="https://www.facebook.com/"><img src={facebook} alt="facebook logo" /></a>
            <a href="https://www.instagram.com/"><img src={instagram} alt="instagram logo" /></a>        
        </div>
    </div>
</section>
    );
}

export default Footer;
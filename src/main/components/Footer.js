import "../design/footer/footerStyle.css";
import FooterHeader from "./footerParts/FooterHeader";
import FooterBottom from "./footerParts/FooterBottom";

export default function Footer() {
    return (
        <>
            <div className={'footer'}>
                <FooterHeader/>
                <FooterBottom/>
            </div>
        </>
    )
}
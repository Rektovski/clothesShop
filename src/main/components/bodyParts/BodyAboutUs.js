import "../../design/body/bodyAboutUsStyle.css";
import {Container} from "react-bootstrap";
import aboutUsRowRightImage from "../../assets/body/bodyAboutUs/kyD7I53MEuE.png";

export default function BodyAboutUs() {
    return (
        <>
            <div className={'aboutUs'}>
                <Container>
                    <div className={'aboutUsTitle'}>ABOUT US</div>
                    <div className={'aboutUsRowSpace'}>
                        <div className={'aboutUsRow'}>
                            <div className={'aboutUsRowLeft'}>
                                Due to our Shop-in-Shop Concept, each Shopshop.ge store defines its own individual
                                return rules. Information about the return policy for each order can be found on the
                                product page of our website. It is important that you read the return policy information
                                posted by each store in detail before confirming your order. We are a company -
                                SHOPSHOP. This Privacy Policy applies to our website and mobile applications (which we
                                call the "Services").
                            </div>
                            <div className={'aboutUsRowRight'}>
                                <img className={'aboutUsRowRightImage'} src={aboutUsRowRightImage} alt={'aboutUsRowRightImage'}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
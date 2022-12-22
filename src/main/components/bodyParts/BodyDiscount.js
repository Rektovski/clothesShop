import "../../design/body/bodyDiscountStyle.css";
import {Container} from "react-bootstrap";
import discountImage from "../../assets/body/bodyDiscount/Group 1.png";

export default function BodyDiscount() {
    return (
        <>
            <div className={'bodyDiscount'}>
                <Container>
                    <img className={'discountImage'} src={discountImage} alt={'discountImage'}/>
                </Container>
            </div>
        </>
    )
}
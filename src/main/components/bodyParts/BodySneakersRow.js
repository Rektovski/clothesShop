import "../../design/body/bodySneakersRowStyle.css";
import {sneakersList} from "./helper/sneakersList";
import {Container} from "react-bootstrap";

export default function BodySneakersRow() {
    return (
        <>
            <Container>
                <div className={'sneakers'}>
                    <div className={'sneakersHeader'}>POPULAR PRODUCTS</div>
                    <figure className={'sneakersUnderline'}></figure>
                    <div className={'sneakersItemRowSpace'}>
                        <div className={'sneakersItemRow'}>
                            {
                                sneakersList.map((item, id) => (
                                    <div key={id} className={'sneakersItemSpace'}>
                                        <img className={'sneakersImage'} src={item.image} alt={'popularItem'}/>
                                        <div className={'sneakersTitle'}>{item.name}</div>
                                        <div className={'sneakersBody'}>{item.cost}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
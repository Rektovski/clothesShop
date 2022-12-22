import "../../design/body/bodyPopularStyle.css";
import {Container} from "react-bootstrap";
import {popularItemList} from "./helper/popularItemList";

export default function BodyPopular() {
    return (
        <>
            <Container>
                <div className={'popular'}>
                    <div className={'popularHeader'}>POPULAR PRODUCTS</div>
                    <figure className={'popularUnderline'}></figure>
                    <div className={'popularItemRowSpace'}>
                        <div className={'popularItemRow'}>
                            {
                                popularItemList.map((item, id) => (
                                    <div key={id} className={'popularItemSpace'}>
                                        <img className={'popularImage'} src={item.image} alt={'popularItem'}/>
                                        <div className={'popularTitle'}>{item.name}</div>
                                        <div className={'popularBody'}>{item.cost}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={'bodyPopularBottomSpace'}>
                        <div className={'bodyPopularBottom'}>
                            SHOW MORE
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
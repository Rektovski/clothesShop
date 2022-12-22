import "../../design/body/bodyTop.css";
import {Container} from "react-bootstrap";
import {topCategoryList} from "./helper/topCategoryList";

export default function BodyTop() {
    return (
        <>
            <Container>
                <div className={'top'}>
                    <div className={'topHeader'}>POPULAR PRODUCTS</div>
                    <figure className={'topUnderline'}></figure>
                    <div className={'topRow'}>
                        {
                            topCategoryList.map((item, id) => (
                                <div key={id} className={'topItemSpace'}>
                                    <div className="container">
                                        <img className={'topImage'} src={item.image} alt={'popularItem'}/>
                                        <div className="overlay overlayCenter">
                                            <div >
                                                <figure className={'topUpperLine'}></figure>
                                                <div>{item.name}</div>
                                                <figure className={'topDownLine'}></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={'topBottomSpace'}>
                        <div className={'topBottom'}>
                            SHOW MORE
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
import "../design/navigationBarStyle.css";
import navigationLogo from "../assets/navigation/NOX Clothing.png";
import {BsCart4 as CartIcon} from "react-icons/bs";
import {useState} from "react";

export default function NavigationBar() {
    const [menu, setMenu] = useState(false);
    const rect1 = {transform: "rotate(405deg)", position: "relative", top: 7, backgroundColor: "white"};
    const rect2 = {transform: "rotate(1485deg)", backgroundColor: "white"};
    const rect3 = {transform: "rotate(-405deg)", position: "relative", top: -7, backgroundColor: "white"};


    return (
        <>
            {
                window.innerWidth >= 900 ?
                    <div className={'navigationBar'}>
                        <div className={'navigationBarLeft'}>
                            <img className={'navigationLogo'} src={navigationLogo} alt={'navigationLogo'}/>
                            <figure className={'verticalLine'}></figure>
                            <div className={'navigationLinks'}>WOMEN</div>
                            <div className={'navigationLinks'}>MEN</div>
                            <div className={'navigationLinks'}>ACCESSORIES</div>
                            <div className={'navigationLinks'}>DROPS</div>
                        </div>
                        <div className={'navigationBarRight'}>
                            <div className={'navigationLinks'}>ABOUT US</div>
                            <div className={'navigationLinks'}>CONTACT</div>
                            <div className={'navigationLinks'}>BLOG</div>
                            <div className={'navigationLinks'}>
                                <CartIcon className={'navigationCart'} size={30}/>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`navigationBar`}>
                        <div className={`NavbarBurger`} onClick={() => setMenu(!menu)}>
                            <div style={menu ? rect1 : {}} className={'rectangle1'}></div>
                            <div style={menu ? rect2 : {}} className={'rectangle2'}></div>
                            <div style={menu ? rect3 : {}} className={'rectangle3'}></div>
                        </div>
                        {
                            !menu && <img className={'navigationLogo'} src={navigationLogo} alt={'navigationLogo'}/>
                        }
                        {
                            menu ?
                                <>
                                    <div className={'menuNavbarLinks'}>
                                        <div className={'navbarLinks'}>
                                            WOMEN
                                        </div>
                                        <div className={'navbarLinks'}>
                                            MEN
                                        </div>
                                        <div className={'navbarLinks'}>
                                            ACCESSORIES
                                        </div>
                                        <div className={'navbarLinks'}>
                                            DROPS
                                        </div>
                                        <div className={'navbarLinks'}>
                                            ABOUT US
                                        </div>
                                        <div className={'navbarLinks'}>
                                            CONTACT
                                        </div>
                                        <div className={'navbarLinks'}>
                                            BLOG
                                        </div>
                                    </div>
                                </>
                                : ""
                        }
                    </div>
            }
        </>
    )
}
import "../design/header/headerStyle.css";

export default function Header() {
    return (
        <>
            <div className={'headerBackground'}>
                <div className={'headerSpaceForText'}>
                    <div className={'headerTitle'}>NEW COLLECTION</div>
                    <div className={'headerBody'}>NEW STREET-WEAR OUTFITS</div>
                </div>
                <div className={'headerBottomSpace'}>
                    <div className={'headerBottom'}>
                        SHOW MORE
                    </div>
                </div>
            </div>
        </>
    )
}
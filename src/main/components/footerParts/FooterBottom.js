import "../../design/footer/footerBottomStyle.css";

export default function FooterBottom() {
    return (
        <>
            <div className={'developerFooter text-center'}>
                <a
                    href={"https://otarmurmanishvili.netlify.app/"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={'developer-box'}>
                    Developer: "Otar Murmanishvili"
                </a>
            </div>
        </>
    )
}
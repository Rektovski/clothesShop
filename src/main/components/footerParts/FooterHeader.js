import "../../design/footer/footerHeaderStyle.css";
import {Container, Form} from "react-bootstrap";
import {Button, FormControl, FormLabel, Input, Textarea} from "@chakra-ui/react";
import {useState} from "react";
import mapImage from "../../assets/footer/footerHeader/image 1.png";
import {BsFillTelephoneFill as TeleIcon} from "react-icons/bs";
import {MdOutlineMail as MailIcon} from "react-icons/md";

const defaultForm = {
    title: "",
    email: "",
    body: ""
}

export default function FooterHeader() {
    const [form, setForm] = useState(defaultForm);

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const sendEmail = (event) => {
        event.preventDefault();
        setForm(defaultForm);
    }

    return (
        <>
            <Container>
                <div className={'footerHeader'}>
                    <div className={'footerHeaderLeft'}>
                        <div className={'formTitle'}>Contact us!</div>
                        <Form onSubmit={(event) => {
                            sendEmail(event)
                        }}>
                            <FormControl className={'my-2'} variant="floating" id="first-name" isRequired>
                                <FormLabel className={'py-2 formLabel'}>Full name</FormLabel>
                                <Input
                                    name={'title'} value={form.title}
                                    onChange={(event) => {
                                        changeHandler(event)
                                    }}
                                    className={'formInput'} placeholder="full name"/>
                            </FormControl>
                            <FormControl className={'my-2'} variant="floating" id="first-name" isRequired>
                                <FormLabel className={'py-2 formLabel'}>Email</FormLabel>
                                <Input
                                    name={'email'} value={form.email}
                                    onChange={(event) => {
                                        changeHandler(event)
                                    }}
                                    className={'formInput'} placeholder="email"/>
                            </FormControl>

                            <FormControl className={'my-2'} variant="floating" id="first-name" isRequired>
                                <FormLabel className={'py-2 formLabel'}>Text</FormLabel>
                                <Textarea
                                    name={'body'} value={form.body}
                                    onChange={(event) => {
                                        changeHandler(event)
                                    }}
                                    className={'my-2 formInput'} placeholder='Write what you want'/>
                            </FormControl>
                            <div className={'d-flex py-2'}>
                                <div className={'flex-fill'}></div>
                                <Button type={'submit'}>Send</Button>
                            </div>
                        </Form>
                    </div>
                    <div className={'footerHeaderRight'}>
                        <div className={'footerHeaderRightTitle'}>Tbilisi, Georgia</div>
                        <div className={'mapImageSpace'}>
                            <img className={'mapImage'} src={mapImage} alt={'mapImage'}/>
                        </div>
                        <div className={'contact'}>
                            <div className={'m-4'}>
                                <div className={'footerHeaderRightSideText contactDetails mb-3'}>
                                    <TeleIcon className={'me-3'} size={30}/>
                                    +995-XXX-XXX-XXX
                                </div>
                                <div className={'footerHeaderRightSideText contactDetails mb-3'}>
                                    <MailIcon className={'me-3'} size={30}/>
                                    test@test.com
                                </div>
                            </div>
                            <div className={'m-4'}>
                                <div className={'footerHeaderRightSideText'}>Opened</div>
                                <div className={'footerHeaderRightSideText'}>Mon-Fri: 09:00 - 20:00</div>
                                <div className={'footerHeaderRightSideText'}>Sat: 10:00 - 17:00</div>
                                <div className={'footerHeaderRightSideText'}>Sun: 10:00 - 15:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
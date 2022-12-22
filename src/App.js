import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import NavigationBar from "./main/components/NavigationBar";
import Header from "./main/components/Header";
import Body from "./main/components/Body";
import Footer from "./main/components/Footer";

export default function App() {
    return (
        <>
            <ChakraProvider>
                <div className="App">
                    <NavigationBar/>
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
            </ChakraProvider>
        </>
    );
}
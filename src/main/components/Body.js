import BodyPopular from "./bodyParts/BodyPopular";
import BodyDiscount from "./bodyParts/BodyDiscount";
import BodyTop from "./bodyParts/BodyTop";
import BodyAboutUs from "./bodyParts/BodyAboutUs";
import BodySneakers from "./bodyParts/BodySneakers";
import BodySneakersRow from "./bodyParts/BodySneakersRow";

export default function Body() {
    return (
        <>
            <BodyPopular/>
            <BodyDiscount/>
            <BodyTop/>
            <BodyAboutUs/>
            <BodySneakers/>
            <BodySneakersRow/>
        </>
    )
}
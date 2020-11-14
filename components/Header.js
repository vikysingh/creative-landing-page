import RightColImg from "../assets/header_img.svg"

import Heading from "./Utility/Heading"
import Paragraph from "./Utility/Paragraph"
import Form from "./Utility/Form"
import Grid from "./Utility/Grid"

const Header = ({title, paragraph}) => (
    <header>
        <Grid leftChild={<>
            <Heading level="h1">{title}</Heading>
            <Paragraph>
                {paragraph}
            </Paragraph>
            <Form inputPlacehoder="Name@company.com" buttonText="Try it free" />
        </>}
        rightChild={ <img src={RightColImg} alt="" />} />
    </header>
)

export default Header
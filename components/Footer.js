import Heading from "./Utility/Heading"
import Paragraph from "./Utility/Paragraph"
import Form from "./Utility/Form"

const Footer = ({title, paragraph}) => (
    <footer className="footer" >
        <Heading>{title}</Heading>
        <Paragraph>
            {paragraph}
        </Paragraph>
        <Form />
    </footer>
)

export default Footer
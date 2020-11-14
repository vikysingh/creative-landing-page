import Card from "./Utility/Card"
import Heading from "./Utility/Heading"

import Card1Img from "../assets/card1_img.svg"
import Card2Img from "../assets/card2_img.svg"
import Card3Img from "../assets/card3_img.svg"

const CardSection = ({title, cardTitle, description, backgrounds}) => (
    <section className="card-section" >
        <Heading level="h2" >{title}</Heading>
        <div>
            <Card img={Card1Img} title={cardTitle} description={description} bgColor={backgrounds[0]} />
            <Card img={Card2Img} title={cardTitle} description={description} bgColor={backgrounds[1]} />
            <Card img={Card3Img} title={cardTitle} description={description} bgColor={backgrounds[2]} />
        </div>
    </section>
)

export default CardSection
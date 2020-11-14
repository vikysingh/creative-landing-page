import UserImg from "../assets/user_img_1.svg"
import UserImg2 from "../assets/user_img_2.svg"

import Heading from "./Utility/Heading"

const Testimonials = ({title, number}) => (
    <section className="testimonials-section" >
        <Heading level="h2">{title}</Heading>
        <Heading level="h1" >{number}</Heading>

        <img src={UserImg} alt="" />
        <img src={UserImg2} alt="" />
        
        <img src={UserImg} alt="" />
        <img src={UserImg2} alt="" />

        <img src={UserImg} alt="" />
        <img src={UserImg2} alt="" />
    </section>
)

export default Testimonials
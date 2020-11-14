import PromotionImg from "../assets/promotion_img.svg"
import Playstore from "../assets/playstore_icon.svg"
import Appstore from "../assets/appstore_icon.svg"

import Heading from "./Utility/Heading"
import Paragraph from "./Utility/Paragraph"
import Grid from "./Utility/Grid"

const Promotion = ({title, paragraph}) => (
    <section className="promotion-section" >
        <Grid
        leftChild={
            <>
                <Heading>{title}</Heading>
                <Paragraph>{paragraph}</Paragraph>
                <div className="promotion-section-icons-container" >
                    <img src={Appstore} alt="" />
                    <img src={Playstore} alt="" />
                </div>
            </>
        }

        rightChild={<img src={PromotionImg} alt="" className="promotion-section-right-image"  />}
         />
    </section>
)

export default Promotion
import DashboardImg from "../assets/dashboard.svg"

import Heading from "./Utility/Heading"
import Paragraph from "./Utility/Paragraph"
import Grid from "./Utility/Grid"

const Dashboard = ({title, paragraph, btnText}) => (
    <section className="dashboard-section" >
        <Grid
        leftChild={<img src={DashboardImg} alt="" />}
        rightChild={
            <>
                <Heading level="h2">{title}</Heading>
                <Paragraph> {paragraph} </Paragraph>
                <button className="button_filled" >{btnText}</button>
            </>
        }
         />
    </section>
)

export default Dashboard
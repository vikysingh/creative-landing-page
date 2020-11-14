import Navbar from "../components/Navbar"
import Header from "../components/Header"

import Dashboard from "../components/Dashboard"
import Promotion from "../components/Promotion"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import CardSection from "../components/CardSection"

import Content from "../constants/Content.json"

const Index = () => (
    <>
    <Navbar brand={Content.navbar.brand} btnText={Content.navbar.btnText} />

    <Header title={Content.header.title} paragraph={Content.header.paragraph} />

    <CardSection title={Content.cardSection.title}
    cardTitle={Content.cardSection.cards.title}
    description={Content.cardSection.cards.paragraph}
    backgrounds={Content.cardSection.cards.backgrounds}
    />

    <Dashboard title={Content.dashboard.title} paragraph={Content.dashboard.paragraph}
    btnText={Content.dashboard.btnText} />

    <Promotion title={Content.promotion.title} paragraph={Content.promotion.paragraph} />
    
    <Testimonials title={Content.testimonials.title} number={Content.testimonials.number} />

    <Footer title={Content.footer.title} paragraph={Content.footer.paragraph} />
    </>
)

export default Index
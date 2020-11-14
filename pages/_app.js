import "../styles/main.css"
import "../styles/elements.css"

import Home from "./index"
import Head from "next/head"

const App = () => <>
        <Head>
            <meta property="og:title" content="Taskia" key="title" />
            <meta name="description" content="Taskia management tool. Try free"></meta>
            <meta charSet="utf-8" />
            <title> Taskia </title>
        </Head>
        <Home />
    </>


export default App
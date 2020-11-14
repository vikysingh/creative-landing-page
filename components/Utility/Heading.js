const Heading = ({ children, level }) => {
    function classGenerator() {
        return `heading heading-${level}`
    }
    switch(level) {
        case 'h1':
            return <h1 className={classGenerator()} >{children}</h1>
        case 'h2':
            return <h2 className={classGenerator()} >{children}</h2>
        case 'h3':
            return <h3 className={classGenerator()} >{children}</h3>
        case 'h4':
            return <h4 className={classGenerator()} >{children}</h4>
        default:
            return <h1 className={classGenerator()} >{children}</h1>
    }
}

export default Heading
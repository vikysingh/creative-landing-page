const Form = () => (
    <form className="form" onSubmit={e => e.preventDefault()} >
        <input type="email" placeholder="Name@company.com" required={true} />
        <button type="submit" >Try it free</button>
    </form>
)

export default Form

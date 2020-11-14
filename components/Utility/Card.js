//import styled from "styled-components";

const Card = ({ img, title, description, bgColor }) => (
    <div style={{ backgroundColor: bgColor }} className="card" >
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
)

export default Card
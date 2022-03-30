import styledComponents from "styled-components"

const Container = styledComponents.div`
height: 30px;
background-color: lightblue;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;


`

const Announcement = () => {
  return (
    <Container>
        Free Shipping on Orders over 50 RON!!!
    </Container>
  )
}

export default Announcement
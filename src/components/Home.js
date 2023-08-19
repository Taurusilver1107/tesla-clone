import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            startingPrice= "Starting at $35,800"
            description="After Federal Tax Credit"
            leftBtnText="Custom Order"
            rightBtnText="Explore Inventory"
            backgroundImg="model-s.jpg"
        />
        <Section
            title="Model 3"
            startingPrice= "Starting at $32,740"
            description="After Federal Tax Credit"
            leftBtnText="Custom Order"
            rightBtnText="Explore Inventory"
            backgroundImg="model-3.jpg"
        />
        <Section
            title="Model Y"
            startingPrice= "Starting at $40,800"
            description="After Federal Tax Credit"
            leftBtnText="Custom Order"
            rightBtnText="Explore Inventory"
            backgroundImg="model-Y.jpg"
        />
        <Section
            title="Model X"
            startingPrice= "Starting at $53,800"
            description="After Federal Tax Credit"
            leftBtnText="Custom Order"
            rightBtnText="Explore Inventory"
            backgroundImg="model-x.jpg"
        />
        <Section
            title="Solar Panel"
            description="Schedule a Virtual Consultation"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg="solar-panel.jpg"
        />
        <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg="solar-roof.jpg"
        />
        <Section
            title="Accessories"
            leftBtnText="Order Now"
            backgroundImg="accessories.jpg"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    overflow-x: hidden;
`;
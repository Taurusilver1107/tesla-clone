import React from 'react'
import styled from 'styled-components'

function Section({ title, startingPrice, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{startingPrice}</p>
                <p>{description}</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    { leftBtnText }
                </LeftButton>
                { rightBtnText &&
                    <RightButton>
                        { rightBtnText }
                    </RightButton>
                
                }
            </ButtonGroup>
            
        </Wrap>
)
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    /* background: url('/images/model-s.jpg'); */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${ props => `url("/images/${props.bgImage}")` };
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1{
        font-family: SF Pro Display;
        font-size: 40px;
        font-weight: 700;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 8vh;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.button`
    background-color: rgba(23,26,32,.8);
    height: 40px;
    min-width: 256px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    opacity: .85;
    border: none;
    outline: none;
    text-transform: capitalize;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: .65;
    color: #000;
`

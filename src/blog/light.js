import React from 'react';
import styled from 'styled-components';
import Navbar from "../Navbar";
const BlogContainer = styled.section`
    background-color: black;
    color: white;
    font-family: 'Press Start 2P', cursive;
    min-height: 50vh;
`

const SectionTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 90px;
    text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`

const BlogText = styled.p`
    text-align: center;
    font-size: 30px;
    margin: 20px 80px 0 80px;
    line-height: 1.4;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
`

const Poem = styled.p`
    text-align: center;
    font-size: 30px;
    margin: 20px 80px 0 80px;
    line-height: 1.4;
    margin-bottom: 30px;
    font-family: 'Times New Roman', sans-serif;
`


const Light = () => {
return (<>
<Navbar/>
<BlogContainer>
    <SectionTitle>Light</SectionTitle>
    <BlogText>This is a little poem I wrote following a random poetic ephinany while watching the sun rise at the Rock Beach, Pondicherry.</BlogText>
    <Poem>
        Light is a wonderful thing <br />
        For it is quick at speed itself <br/>
        But as still as the silence before dawn <br/>
        A whisper of colour, soft and strong <br/>
        Dancing through shadows <br/>
        It carries the promise of the day reborn <br/>
    </Poem>
    <BlogText>On a side note, I'll soon make a dedicated page just for the blogs and begin grouping them by category</BlogText>
</BlogContainer>
</>)

}

export default Light;
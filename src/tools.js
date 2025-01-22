import React from 'react';
import styled from 'styled-components';

const PhysicsContainer = styled.section`
    background-color: black;
    color: white;
    font-family: 'Press Start 2P', cursive;
    min-height: 50vh;
`

const SectionTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 200px;
    text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`

const PhysicsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`

const SectionHeaderText = styled.p`
    text-align: center;
    font-size: 1rem;
    margin: 5px 0;
    line-height: 1.4;
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
    `

const PhysicsCard = styled.div`
    background: #222;
    border: 3px solid #fff;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    max-width: 100%;
    box-shadow: 0 0 10px #ff0000;
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px #00ff99;
    }
`

const PhysicsHeader = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-shadow: 1px 1px #ff0000;
`

const PhysicsDescription = styled.p`
    font-size: 1rem;
    margin: 10px 0;
    line-height: 1.2;
`

const Link = styled.a`
    color: #00ff99;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`

const PhysicsUtilitiesSection = () => {
    return (
        <PhysicsContainer id="physics">
            <SectionTitle>Physics Utilities</SectionTitle>
                <SectionHeaderText>I enjoy making some physics utilities from time to time and posting them on GitHub or on this site here. Over time, I'll continue working on more websites for them so they can be more accessible.</SectionHeaderText>
            <PhysicsList>
                <PhysicsCard>
                    <PhysicsHeader><Link href = "https://harrypotter12352.github.io/brans-dicke-calculator">Brans Dicke Theory Solver</Link></PhysicsHeader>
                    <PhysicsDescription>The Brans-Dicke theory is a somewhat complicated scalar-tensor theory of gravitation. This solver allows one to obtain the full Einstein tensor by inputting the parameters required for computation.</PhysicsDescription>
                </PhysicsCard>
                <PhysicsCard>
                    <PhysicsHeader>
                        <Link href = "https://github.com/HarryPotter12352/d-alembertian-operator-calculator">d'Alembertian operator calculator</Link>
                    </PhysicsHeader>
                    <PhysicsDescription>
                        The d'Alembertian operator is a differential operator that appears in wave equations. In curved spacetime, it is also referred to as the Laplace-Beltrami operator. As it is used in many theories, this calculator allows one to compute it using various metric tensors.
                    </PhysicsDescription>
                </PhysicsCard>
                <PhysicsCard>
                    <PhysicsHeader>
                        <Link href = "https://github.com/HarryPotter12352/spin-correlation-coefficient-calculator">Spin correlation coefficient calculator</Link>
                    </PhysicsHeader>
                    <PhysicsDescription>
                        In Quantum Field Theory, spin correlation coefficients are parametrized coefficients that act as gauge fields. They ensure that the co-variant derivative accounts for local transformations in the tetrad field correctly.
                    </PhysicsDescription>
                </PhysicsCard>
            </PhysicsList>
        </PhysicsContainer>
    )
}

export default PhysicsUtilitiesSection;
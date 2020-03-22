import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { SentanceSet, ImagesSet } from '../../data';

const Card = () => {
    const [imageItems, setImageItems] = useState([]);

    useEffect(() => {
        const randomize = ImagesSet.map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

        setImageItems(randomize);

    }, [ImagesSet]);

    const onValidateAnswer = (event, id) => {

        const getmageId = imageItems[event.target.value - 1].id;
        const validate = SentanceSet.find(item => item.id === id).imageId;

        console.log({ getmageId, validate } ,getmageId === validate);

    };

    console.log(imageItems);

    return (
        <>
            <GameHeader>
                <Progress value="32" max="100">32%</Progress>
            </GameHeader>

            <CardContainer>
                <ImageContainer>
                    {imageItems.map((img, index) => (
                        <ImageItem key={img.id}>
                            <img src={img.image} alt={img.name} />
                            {img.name}
                            <Number>{index + 1}</Number>
                        </ImageItem>
                    ))}                
                </ImageContainer>

                <section>
                    {SentanceSet.map((sentance) => (
                        <InputItem key={sentance.id}>
                            <Input
                                maxLength={1}
                                type="number"
                                min="0"
                                max="5"
                                onChange={(e) => onValidateAnswer(e, sentance.id)}
                            />
                            <QuizText>{sentance.sentance}</QuizText>
                            <ValidBox>x</ValidBox>
                        </InputItem>
                    ))}      
                </section>
            </CardContainer>

            <button>Volgende</button>
        </>
    )
};

const Icon = styled.i`

`;

const GameHeader = styled.section`
    display: flex;
`;

const Progress = styled.progress`
    -webkit-appearance: none;
    appearance: none;
    width: 250px;
    height: 20px;
    margin-right: 1rem;
    flex-basis: 80%;

    &::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
`;

const CardContainer = styled.article`
    border: 1px solid ${({ theme }) =>  theme.colors.grey};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: white;
    padding: 10px;
    width: 80vw;
    margin: 0 auto;
`;

const ImageContainer = styled.section`
    @media ${({ theme }) => theme.breakpoint.sm} {
        display: flex;
        justify-content: space-between;
    }
`;

const ImageItem = styled.article`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: calc(50% - .5rem);

    &:nth-child(odd) {
        margin-right: 1rem;
    }

    @media ${({ theme }) => theme.breakpoint.sm} {
        display: flex;
        margin-right: 1rem;
        width: auto;
    }

    &:last-of-type {
        margin-right: 0;
    }

    img {
        max-width: 100%;
        border: 1px solid ${({ theme }) =>  theme.colors.grey};
        border-radius: ${({ theme }) => theme.borderRadius};
        box-shadow: 0px 9px 14px 1px #6564643b;
    }
`;

const InputItem = styled.article`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) =>  theme.colors.grey};
    padding: 1rem .7rem;
`;

const Input = styled.input`
    border: 1px solid ${({ theme }) =>  theme.colors.grey};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1rem .7rem;
    margin-right: 1rem;
    width: 4rem;
`;

const Number = styled.div`
    padding: 5px 10px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) =>  theme.colors.grey};
    transform: translateY(-50%);
    background-color: white;
`;

const QuizText = styled.p`
    flex: 1;
    align-self: center;
`;

const ValidBox = styled.div`
    flex-basis: 2rem;
    text-align: center;
    @media ${({ theme }) => theme.breakpoint.sm} {
        flex-basis: 5rem;
    }
`;

export default Card;

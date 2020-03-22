import styled from 'styled-components';

const Header = () => (
    <Container>
        <img src="http://placehold.it/50x30" title="lezen is leuk" alt="lezen is leuk logo" />
    </Container>
);

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.main};
    padding: 10px 20px;
    margin-bottom: 1rem;
`;

export default Header;

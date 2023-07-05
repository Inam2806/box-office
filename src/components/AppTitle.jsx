import styled from 'styled-components';

export default function AppTitle(props) {
  const {
    title = 'Movie Wizard',
    subtitle = 'Are you looking for a movie or an actor?',
  } = props;

  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    font-size: 3rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin: 0 0 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    font-size: 1.5rem;
    margin: 0;
    opacity: 0.7;
  }
`;

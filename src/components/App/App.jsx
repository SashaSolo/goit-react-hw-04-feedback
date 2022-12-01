import { Container } from './App.styled';
import { Statistics } from '../Statistics/Statistics';
import { Feedback } from '../Feedback/Feedback';

import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  return (
    <Container>
      <Feedback title="Please leave feedback" />
      <Statistics title="Statistics" />
      <GlobalStyle />
    </Container>
  );
};

import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOption } from '../FeedbackOption/FeedbackOption';
import { SectionMain } from '../SectionMain/SectionMain';
import { Notification } from '../Notification';

import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        throw new Error(`Unknown type ${type}`);
    }
  };

  const countTotalFb = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let goodResult = Number(Math.round((good / (good, neutral, bad)) * 100));
    return goodResult;
  };

  return (
    <Container>
      <SectionMain title={'Please leave feedback'}>
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </SectionMain>
      <SectionMain title={'Statistics'}>
        {countTotalFb() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFb()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </SectionMain>
      <GlobalStyle />
    </Container>
  );
}

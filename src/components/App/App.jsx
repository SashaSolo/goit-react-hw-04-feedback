import React from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOption } from '../FeedbackOption/FeedbackOption';
import { SectionMain } from '../SectionMain/SectionMain';
import { Notification } from '../Notification';

import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let goodResult = Number(Math.round((good / (good, neutral, bad)) * 100));
    return goodResult;
  };

  render() {
    const totalForFB = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <SectionMain title={'Please leave feedback'}>
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </SectionMain>
        <SectionMain title={'Statistics'}>
          {totalForFB > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalForFB}
              positivePercentage={positivePercent}
            />
          ) : (
            <Notification />
          )}
        </SectionMain>
        <GlobalStyle />
      </Container>
    );
  }
}
// };
export default App;

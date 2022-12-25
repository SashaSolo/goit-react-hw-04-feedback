import React from 'react';
import { Btn } from './Feedback.styled';

export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Btn
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Btn>
      ))}
    </div>
  );
};

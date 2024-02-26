import React from 'react';
import Feedback from './feedback/Feedback';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleClick = evt => {
    const option = evt.target.id;

    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const totalFeedback = countTotalFeedback();
  const countPositivePercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  const positivePercentage = countPositivePercentage();

  return (
    <div>
      <h1
        style={{
          color: '#4b3621',
          backgroundColor: 'pink',
          margin: 0,
          paddingTop: 50,
          textAlign: 'center',
          fontSize: 70,
          fontFamily: 'Snell Roundhand',
          fontStyle: 'italic',
        }}
      >
        ESPRESSO café
      </h1>
      <div
        style={{
          fontFamily: 'Snell Roundhand',
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '0 100px 0 100px',
          gap: 30,
          fontSize: 40,
          color: '#ffffff',
          backgroundColor: 'pink',
          paddingBottom: 70,
        }}
      >
        <Section title="Leave Feedback ♥!">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
};

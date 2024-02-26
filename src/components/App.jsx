import React, { Component } from 'react';
import Feedback from './feedback/Feedback';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  /*state = {
  };*/
  handleClick = evt => {
    /*console.log(evt);
    console.log(option);*/
    const option = evt.target.id;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    };
    const totalFeedback = countTotalFeedback();
    const countPositivePercentage = () => {
      const { good } = this.state;
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
              onLeaveFeedback={this.handleClick}
            />
          </Section>
          <Section title="Statistics">
            {totalFeedback > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
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
  }
}

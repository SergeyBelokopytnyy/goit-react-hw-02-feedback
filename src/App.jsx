import React, { Component } from 'react';
import FeedbacOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  // goodBtn = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // neutralBtn = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // badBtn = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  CountPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <Section title="Please live feedback">
          <FeedbacOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
            // options={['Good', 'Neutral', 'Bad']}
            // onGood={this.goodBtn}
            // onNeutral={this.neutralBtn}
            // onBad={this.badBtn}
          />
        </Section>
        {this.good === 0 && this.neutral === 0 && this.bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.CountPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

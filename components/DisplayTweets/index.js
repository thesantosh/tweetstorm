const React = require('react');
const { connect } = require('react-redux');
const DisplayTweet = require('../DisplayTweet');
require('./styles.scss');

const DisplayTweets = ({ tweets }) => {
  if (tweets) {
    return (
      <div className="tweetstorm-tweets-container">
        {
          tweets.map((tweet, index) => {
            return (<DisplayTweet tweet={ tweet } key={ index } index={ index }/>);
          })
        }
      </div>
    );
  } else {
    return (
      <div className="tweetstorm-tweets-container" />
    );
  }
};

const mapStateToProps = state => {
  return {
    tweets: state.tweetStorm
  };
};

module.exports = connect(mapStateToProps, null)(DisplayTweets);
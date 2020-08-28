import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes.js';

class Quotes extends Component {

  render() {
    const {quotes, upvoteQuote, downvoteQuote, removeQuote} = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {console.log("this", this.props)}
               {/* {QuoteCard(this.props.dispatch)} */}
              {/* const { name, realName } = hero
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {quotes.map(quote => <QuoteCard key={quote.id} 
               upvoteQuote={upvoteQuote}
               downvoteQuote={downvoteQuote}
               removeQuote={removeQuote}
              quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return {
  quotes: state.quotes
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId))
  }
}


//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

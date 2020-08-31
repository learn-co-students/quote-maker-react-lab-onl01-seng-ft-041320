import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    return (
      <div>
        {this.props.quotes.map( quote => {
              return (
              <QuoteCard 
                quote={quote}
                onUpvote={this.props.upvoteQuote}
                onDownvote={this.props.downvoteQuote}
              />
              )
            } 
          )
        }
      </div>
    )
  }

  render() {
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: () => dispatch(removeQuote() ),
    upvoteQuote: (id) => dispatch(upvoteQuote(id) ),
    downvoteQuote: (id) => dispatch(downvoteQuote(id) )
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

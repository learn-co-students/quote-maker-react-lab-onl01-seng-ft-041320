import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {


  renderQuotes = () => (
    this.props.quotes.map(quote => {
      return <QuoteCard key={quote.id} quote={quote} upvoteQuote={this.props.upvoteQuote} removeQuote={this.props.removeQuote} downvoteQuote={this.props.downvoteQuote} />
    })
  )

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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
 { quotes: state.quotes }
)

const mapDispatchToProps = (dispatch) => (
  {
    removeQuote: (id) => dispatch(removeQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id))
  }
)

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

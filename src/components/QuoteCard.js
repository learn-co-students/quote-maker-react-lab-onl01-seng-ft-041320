import React from 'react';

const QuoteCard = (props) => {
  const { id, content, author } = props.quote
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>- author <cite title="Source Title">{author}</cite></footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => props.upvoteQuote(id)}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => props.downvoteQuote(id)}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.removeQuote(id)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  )
}

export default QuoteCard;
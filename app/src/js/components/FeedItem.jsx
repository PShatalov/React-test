var React = require('react');

var FeedItem = React.createClass({
    render: function() {
        return (
            <li className="list-group-item">
                <span className="badge badge-success">{this.props.feed.voteCount}</span>
                <h4>{this.props.feed.title}</h4>
                <span>{this.props.feed.description}</span>

                <span className="pull-right">
                    <button id="up" className="btn btn-sm btn-primary">&uarr;</button>
                    <button id="down" className="btn btn-sm btn-primary">&darr;</button>
                </span>
            </li>
        );
    }
});

module.exports = FeedItem;
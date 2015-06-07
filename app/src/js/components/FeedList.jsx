var React = require('react');
import FeedItem from './FeedItem.jsx'

var FeedList = React.createClass({

    render: function() {
        return (
            <ul className="list-group">
                {this.props.items.map(feed => <FeedItem feed={feed} onVote={ this.props.onVote } />)}
            </ul>
        );
    }
});

module.exports = FeedList;
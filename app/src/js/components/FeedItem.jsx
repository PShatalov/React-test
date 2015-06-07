var React = require('react');

var FeedItem = React.createClass({
    vote: function(newCount){
        this.props.onVote({
            key: this.props.feed.key,
            title: this.props.feed.title,
            description: this.props.feed.description,
            voteCount: newCount
        });
    },
    voteUp: function(){
        var count = this.props.feed.voteCount;
        var newCount = count + 1;
        this.vote(newCount);
    },
    voteDown: function(){
        var count = this.props.feed.voteCount;
        var newCount = count - 1;
        this.vote(newCount);
    },
    render: function() {
        var badgeClass = (this.props.feed.voteCount >= 0) ? "label label-success pull-right" : "label label-danger pull-right";
        return (
            <li className="list-group-item">
                <span className={badgeClass}>{this.props.feed.voteCount}</span>
                <h4>{this.props.feed.title}</h4>
                <span>{this.props.feed.description}</span>

                <span className="pull-right">
                    <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
                    <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
                </span>
            </li>
        );
    }
});

module.exports = FeedItem;
var React = require('react');
import {Button, Input} from 'react-bootstrap'
var FeedForm = React.createClass({
    handleForm: function(e){
        e.preventDefault();

        var newItem = {
            title: this.refs.title.getDOMNode().value,
            description: this.refs.desc.getDOMNode().value,
            voteCount: 0
        };

        this.refs.feedForm.getDOMNode().reset();
        this.props.onNewItem(newItem);
    },
    render: function() {
        var displayed = this.props.displayed ? 'block' : 'none';
        var styles = {
            display: displayed
        };
        return (
            <form ref="feedForm" style={styles} id="feedForm" className="container" onSubmit={this.handleForm}>
                <div className="form-group">
                    <input ref="title" className="form-control" type="text" placeholder="Title" />
                    <input ref="desc" className="form-control" type="text" placeholder="Description" />
                    <Button type="submit" bsStyle="primary">Add</Button>
                </div>
            </form>
        );
    }
});

module.exports = FeedForm;
var React = require('react');
import {Button, Input} from 'react-bootstrap'
var FeedForm = React.createClass({

    render: function() {
        return (
            <form ref="form" className="container">
                <div className="form-group">
                    <Input ref="" type="text" placeholder="Title" />
                    <Input type="text" placeholder="Description" />
                    <Button type="submit" bsStyle="primary">Add</Button>
                </div>
            </form>
        );
    }
});

module.exports = FeedForm;
var React = require('react');
import ShowAddButton from './ShowAddButton.jsx'
import FeedForm from './FeedForm.jsx'
import FeedList from './FeedList.jsx'

class Feed extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: [
                {key: '1', title: 'Test 1', description: 'Test descr 1', voteCount: 49},
                {key: '2', title: 'Test 2', description: 'Test descr 2', voteCount: 34},
                {key: '3', title: 'Test 3', description: 'Test descr 3', voteCount: 15}
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <ShowAddButton />
                </div>
                <FeedForm />
                <br />
                <br />
                <FeedList items={ this.state.items } />
            </div>
        );
    }
}

export default Feed
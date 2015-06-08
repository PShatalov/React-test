var React = require('react');
var _ = require('lodash');
var Firebase = require('firebase');
import ShowAddButton from './ShowAddButton.jsx'
import FeedForm from './FeedForm.jsx'
import FeedList from './FeedList.jsx'

class Feed extends React.Component {
    loadData(){
        var ref = new Firebase('https://reacttestapp.firebaseio.com/feed');
        ref.on('value', function(snap){
            var items = [];
            var sorted = [];

            snap.forEach(function(itemSnap){
                var item = itemSnap.val();
                item.key = itemSnap.key();
                items.push(item);
            });

             sorted = _.sortBy(items, function(item){
                return -item.voteCount;
            });

            this.setState({
                items: sorted
            });
        }.bind(this));
    }
    componentDidMount(){
        this.loadData();
    }
    constructor(props, context) {
        super(props, context);

         this.state = {
            items: [
                //{key: '1', title: 'Test 1', description: 'Test descr 1', voteCount: 49},
                //{key: '2', title: 'Test 2', description: 'Test descr 2', voteCount: 34},
                //{key: '3', title: 'Test 3', description: 'Test descr 3', voteCount: 15}
            ],
            formDisplayed: false
        }
    }
    onToggleForm() {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    }
    onNewItem(newItem){
        var ref = new Firebase('https://reacttestapp.firebaseio.com/feed');
        ref.push(newItem);
        //console.log(newItem);
        //var newItems = this.state.items.concat([newItem]);
        //console.log(newItems);
        //this.setState({
        //    items: newItems,
        //    formDisplayed: false
        //});
    }
    onVote(item){
        var ref = new Firebase('https://reacttestapp.firebaseio.com/feed').child(item.key);
        ref.update(item);
        //var items = _.uniq(this.state.items);
        //var index = _.findIndex(items, function(feedItems){
        //    return feedItems.key === item.key;
        //});
        //var oldObj = items[index];
        //var newItems = _.pull(items, oldObj);
        //newItems.push(item);
        //items[index] = item;
        //
        //this.setState({
        //    items: items
        //});
    }
    render() {
        return (
            <div>
                <div className="container">
                    <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm.bind(this)} />
                </div>
                <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem.bind(this)} />
                <br />
                <br />
                <FeedList items={ this.state.items } onVote={this.onVote.bind(this)} />
            </div>
        );
    }
}

export default Feed
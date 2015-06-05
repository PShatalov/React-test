(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Feed = _interopRequire(require("./Feed.jsx"));

React.render(React.createElement(Feed, null), document.getElementById("app"));

},{"./Feed.jsx":2,"react":"react"}],2:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = require("react");

var ShowAddButton = _interopRequire(require("./ShowAddButton.jsx"));

var FeedForm = _interopRequire(require("./FeedForm.jsx"));

var FeedList = _interopRequire(require("./FeedList.jsx"));

var Feed = (function (_React$Component) {
    function Feed(props, context) {
        _classCallCheck(this, Feed);

        _get(Object.getPrototypeOf(Feed.prototype), "constructor", this).call(this, props, context);

        this.state = {
            items: [{ key: "1", title: "Test 1", description: "Test descr 1", voteCount: 49 }, { key: "2", title: "Test 2", description: "Test descr 2", voteCount: 34 }, { key: "3", title: "Test 3", description: "Test descr 3", voteCount: 15 }]
        };
    }

    _inherits(Feed, _React$Component);

    _createClass(Feed, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(ShowAddButton, null)
                    ),
                    React.createElement(FeedForm, null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(FeedList, { items: this.state.items })
                );
            }
        }
    });

    return Feed;
})(React.Component);

module.exports = Feed;

},{"./FeedForm.jsx":3,"./FeedList.jsx":5,"./ShowAddButton.jsx":6,"react":"react"}],3:[function(require,module,exports){
"use strict";

var React = require("react");

var _reactBootstrap = require("react-bootstrap");

var Button = _reactBootstrap.Button;
var Input = _reactBootstrap.Input;

var FeedForm = React.createClass({
    displayName: "FeedForm",

    render: function render() {
        return React.createElement(
            "form",
            { ref: "form", className: "container" },
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(Input, { ref: "", type: "text", placeholder: "Title" }),
                React.createElement(Input, { type: "text", placeholder: "Description" }),
                React.createElement(
                    Button,
                    { type: "submit", bsStyle: "primary" },
                    "Add"
                )
            )
        );
    }
});

module.exports = FeedForm;

},{"react":"react","react-bootstrap":"react-bootstrap"}],4:[function(require,module,exports){
"use strict";

var React = require("react");

var FeedItem = React.createClass({
    displayName: "FeedItem",

    render: function render() {
        return React.createElement(
            "li",
            { className: "list-group-item" },
            React.createElement(
                "span",
                { className: "badge badge-success" },
                this.props.feed.voteCount
            ),
            React.createElement(
                "h4",
                null,
                this.props.feed.title
            ),
            React.createElement(
                "span",
                null,
                this.props.feed.description
            ),
            React.createElement(
                "span",
                { className: "pull-right" },
                React.createElement(
                    "button",
                    { id: "up", className: "btn btn-sm btn-primary" },
                    "↑"
                ),
                React.createElement(
                    "button",
                    { id: "down", className: "btn btn-sm btn-primary" },
                    "↓"
                )
            )
        );
    }
});

module.exports = FeedItem;

},{"react":"react"}],5:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = require("react");

var FeedItem = _interopRequire(require("./FeedItem.jsx"));

var FeedList = React.createClass({
    displayName: "FeedList",

    render: function render() {
        return React.createElement(
            "ul",
            { className: "list-group" },
            this.props.items.map(function (feed) {
                return React.createElement(FeedItem, { feed: feed });
            })
        );
    }
});

module.exports = FeedList;

},{"./FeedItem.jsx":4,"react":"react"}],6:[function(require,module,exports){
"use strict";

var React = require("react");
var ShowAddButton = React.createClass({
    displayName: "ShowAddButton",

    render: function render() {
        return React.createElement(
            "button",
            { className: "btn btn-success btn-block" },
            "Create New Item"
        );
    }
});

module.exports = ShowAddButton;

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9wZWV4L1Byb2plY3RzL1JlYWN0VGVzdC9hcHAvc3JjL2pzL2NvbXBvbmVudHMvbWFpbi5qc3giLCIvaG9tZS9wZWV4L1Byb2plY3RzL1JlYWN0VGVzdC9hcHAvc3JjL2pzL2NvbXBvbmVudHMvRmVlZC5qc3giLCIvaG9tZS9wZWV4L1Byb2plY3RzL1JlYWN0VGVzdC9hcHAvc3JjL2pzL2NvbXBvbmVudHMvRmVlZEZvcm0uanN4IiwiL2hvbWUvcGVleC9Qcm9qZWN0cy9SZWFjdFRlc3QvYXBwL3NyYy9qcy9jb21wb25lbnRzL0ZlZWRJdGVtLmpzeCIsIi9ob21lL3BlZXgvUHJvamVjdHMvUmVhY3RUZXN0L2FwcC9zcmMvanMvY29tcG9uZW50cy9GZWVkTGlzdC5qc3giLCIvaG9tZS9wZWV4L1Byb2plY3RzL1JlYWN0VGVzdC9hcHAvc3JjL2pzL2NvbXBvbmVudHMvU2hvd0FkZEJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lDQU8sS0FBSywyQkFBTSxPQUFPOztJQUNsQixJQUFJLDJCQUFNLFlBQVk7O0FBRTdCLEtBQUssQ0FBQyxNQUFNLENBQ04sb0JBQUMsSUFBSSxPQUFHLEVBQ1YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTkYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUN0QixhQUFhLDJCQUFNLHFCQUFxQjs7SUFDeEMsUUFBUSwyQkFBTSxnQkFBZ0I7O0lBQzlCLFFBQVEsMkJBQU0sZ0JBQWdCOztJQUUvQixJQUFJO0FBQ0ssYUFEVCxJQUFJLENBQ00sS0FBSyxFQUFFLE9BQU8sRUFBRTs4QkFEMUIsSUFBSTs7QUFFRixtQ0FGRixJQUFJLDZDQUVJLEtBQUssRUFBRSxPQUFPLEVBQUU7O0FBRXRC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QUksUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUU3QixVQUFNLEVBQUUsa0JBQVc7QUFDZixlQUNJOztjQUFJLFNBQVMsRUFBQyxZQUFZO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7dUJBQUksb0JBQUMsUUFBUSxJQUFDLElBQUksRUFBRSxJQUFJLEFBQUMsR0FBRTthQUFBLENBQUM7U0FDckQsQ0FDUDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDOzs7OztBQ2QxQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBRWxDLFVBQU0sRUFBRSxrQkFBVztBQUNmLGVBQ0k7O2NBQVMsU0FBUyxFQUFDLDJCQUEyQjs7U0FBeUIsQ0FDekU7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRmVlZCBmcm9tICcuL0ZlZWQuanN4J1xuXG5SZWFjdC5yZW5kZXIoXG4gICAgICA8RmVlZCAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmltcG9ydCBTaG93QWRkQnV0dG9uIGZyb20gJy4vU2hvd0FkZEJ1dHRvbi5qc3gnXG5pbXBvcnQgRmVlZEZvcm0gZnJvbSAnLi9GZWVkRm9ybS5qc3gnXG5pbXBvcnQgRmVlZExpc3QgZnJvbSAnLi9GZWVkTGlzdC5qc3gnXG5cbmNsYXNzIEZlZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7a2V5OiAnMScsIHRpdGxlOiAnVGVzdCAxJywgZGVzY3JpcHRpb246ICdUZXN0IGRlc2NyIDEnLCB2b3RlQ291bnQ6IDQ5fSxcbiAgICAgICAgICAgICAgICB7a2V5OiAnMicsIHRpdGxlOiAnVGVzdCAyJywgZGVzY3JpcHRpb246ICdUZXN0IGRlc2NyIDInLCB2b3RlQ291bnQ6IDM0fSxcbiAgICAgICAgICAgICAgICB7a2V5OiAnMycsIHRpdGxlOiAnVGVzdCAzJywgZGVzY3JpcHRpb246ICdUZXN0IGRlc2NyIDMnLCB2b3RlQ291bnQ6IDE1fVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2hvd0FkZEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGZWVkRm9ybSAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxGZWVkTGlzdCBpdGVtcz17IHRoaXMuc3RhdGUuaXRlbXMgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmltcG9ydCB7QnV0dG9uLCBJbnB1dH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xudmFyIEZlZWRGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHJlZj1cIlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBic1N0eWxlPVwicHJpbWFyeVwiPkFkZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZlZWRGb3JtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBGZWVkSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj57dGhpcy5wcm9wcy5mZWVkLnZvdGVDb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGg0Pnt0aGlzLnByb3BzLmZlZWQudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5mZWVkLmRlc2NyaXB0aW9ufTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInVwXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiPiZ1YXJyOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZG93blwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIj4mZGFycjs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZlZWRJdGVtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5pbXBvcnQgRmVlZEl0ZW0gZnJvbSAnLi9GZWVkSXRlbS5qc3gnXG5cbnZhciBGZWVkTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLm1hcChmZWVkID0+IDxGZWVkSXRlbSBmZWVkPXtmZWVkfS8+KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmVlZExpc3Q7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTaG93QWRkQnV0dG9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj5DcmVhdGUgTmV3IEl0ZW08L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG93QWRkQnV0dG9uOyJdfQ==

React is a library for generating the user interface of an application

--> the view in a model view controller app

So basically... React manipulates the DOM via a virtual DOM, works with events, and changes the DOM based on 'state'

Use codepen to learn react (API): --> set Babel as the JS preprocessor and add the react library as external JS

React's createElement method
3 parameters: 
1) element that you want to create: in string form 
2) element's attributes
3) element's text content
Returns: 
ReactElement object

React's render method
2 parameters:
1) the element
2) the insertion point: where do you want to add the element as a child

Example:
React.createElement('div', {className: 'foo'}, 'Hey this is my text content!!!!')

Example: 

React.render(React.createElement('div', {className: 'foo'}, 'Hey this is my text content!!!!'), document.body);

JSX: 
Extension of JavaScript syntax that allows XML like syntax. 
You don't HAVE to use JSX with React but they go well together

Example:
React.render(
	<div classname="firstclass">ok...feeling good</div>,
	document.body
);
First parameter of render (the element) is: <div classname="firstclass">ok...feeling good</div> ~~ this is equivalent to vanilla JS like we how we had above
Second parameter: document.body	


Components: is the bundling of elements together into a single component. You need to use: React.createClass
Parameter:
object

We need to define the render property in the object, and that property should be a function that generates elements



 
var MyComponent = React.createClass({
  render: function() {
    return (
      <div> <h1>A Message</h1>{this.props.message}</div>
    );
  }
});

React.render(
  <MyComponent message="Hi there!" />,
  document.body
);

You can have things pop up multiple times!
var MyComponent = React.createClass({
  render: function() {
    var text = "";
    for(var i = 0; i < this.props.times; i++) {
      text += "hello ";
    }
    return (
      <div> {text} </div>
    )
  }
});

React.render(
  <MyComponent times="5" />,
  document.body
);

And then of course, last but not least, we need to know how tohandle event handlers

Let's say: click events would be represented by onClick:
var MyButton = React.createClass({
  onButtonClick: function(evt) {
    alert("OMG! OMG!");
  },

  render: function() {
    return <div onClick={this.onButtonClick}>Press This Button</div>;
  }
});

React.render(
  <MyButton />,
  document.body
)

Exercise:
Display hi

var MyComponent = React.createClass({
	render: function(){
		var msg = this.props.great ? 'hi' :'bye';
		return(
			<h1>msg</h1>
		)
	}

});

React.render(
	<MyComponent greet={true} />,
	documet.body
);

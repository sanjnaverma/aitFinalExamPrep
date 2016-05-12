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

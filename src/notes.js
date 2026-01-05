// React is a SSINGLE PAGE APPLICATION which uses Java Script library, virtual DOM to make the application more faster
// DOM - Document Object Model.
// Virtual DOM - It is a lightweight copy of the real DOM. It is a representation of the UI in memory.
// It is a tree-like structure that contains all the elements of the UI.
// When the state of the application changes, React updates the virtual DOM first.
// Then, it compares the virtual DOM with the real DOM using a process called reconciliation.
// Finally, it updates only the parts of the real DOM that have changed, making the application faster and more efficient.

// Components - Components are the building blocks of a React application. They are reusable pieces of code that can be used to create complex UIs.
// There are two types of components in React - Functional Components and Class Components.
// Functional Components - Functional components are simple JavaScript functions that return JSX.
// Class Components - Class components are ES6 classes that extend the React.Component class and have a render() method that returns JSX.

// Props - Props are short for properties. They are used to pass data from one component to another. in java props are declared inside constructor.
// Props are read-only and cannot be modified by the component that receives them.
// State - State is used to have data inside the component.
// State is mutable and can be modified using the setState() method in class components or the useState() hook in functional components.
// JSX - JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
// JSX is transpiled to JavaScript using a tool called Babel.
// Event Handling - Event handling in React is similar to event handling in HTML.
// render() method - The render() method is a required method in class components that returns the JSX to be rendered on the screen.

//setState helps in udating the state of the component.

//Binding "this" keyword to your function.
//arrow function can handel this keyword binding automatically.without explicit binding.
//1st way - using bind(this) in the render method.
//2nd way - binding in the constructor.
//3rd way - using arrow function.



Routing - Navigating Between Components.
//react-router-dom@ is used to navigate directly to another component without using props drilling.

//React life Cycle is of three types
//1.1.mounting
//Methods in order
//1. constructor
//2. getDerivedStateFromProps
//3. render
//4. componentDidMount
//2.1update
//1. getDerivedStateFromProps
//2. shouldComponentUpdate
//3. render
//4. getSnapshotBeforeUpdate
//5. componentDidUpdate
//3.1unmounting
//1. componentWillUnmount
//Note: In mounting phase only constructor, getDerivedStateFromProps, render, componentDidMount methods are called.

//What is React Life Cycle?
//The React component life cycle refers to the series of methods that are invoked
//at different stages of a component's existence in a React application.
//These stages include mounting, updating, and unmounting.
//Each stage has specific methods that allow developers to hook into these phases
//to perform actions such as initializing state, fetching data, or cleaning up resources.

//PureComponent will update when you have change in state.

//Higher Order Component(HOC)- Passing Component as an argument to another component to get enhanced/updated component.

//Hooks useState,useContent,useEffect- to add side effects on the page.
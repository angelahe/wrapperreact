# tutorial for wrappers
will use for adding flex styles to UI

https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props
https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react
https://www.digitalocean.com/community/tutorials/how-to-customize-react-components-with-props
https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript#spread
https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript


### basic concept of wrapper components
Wrapper components are components that surround unknown components and provide a default structure to display the child components. This pattern is useful for creating user interface (UI) elements that are used repeatedly throughout a design, like modals, template pages, and information tiles.

To create wrapper components, you’ll first learn to use the rest and spread operators to collect unused props to pass down to nested components. Then you’ll create a component that uses the built-in children component to wrap nested components in JSX as if they were HTML elements. Finally, you’ll pass components as props to create flexible wrappers that can embed custom JSX in multiple locations in a component.

## converting data
in this case convert text to emoji - can do in 3 ways
1. You can create a function inside the component that converts the text to an emoji.
2. You can create a function and store it in a file outside the component so that you can reuse the logic across different components.
3. You can create a separate component that converts the text to an emoji.

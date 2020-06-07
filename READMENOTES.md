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

## steps

1. create empty project
2. collect unused props with ...props
 
component will contain a second nested component to display some information visually. To connect the parent and nested component, you’ll use the rest and spread operators to pass unused props from the parent to the child without the parent needing to be aware of the names or types of the props.

By the end of this step, you’ll have a parent component that can provide props to nested components without having to know what the props are. This will keep the parent component flexible, allowing you to update the child component without having to change the parent.

3. create wrapper components with children
create a wrapper component that can take an unknown group of components as a prop. This will give you the ability to nest components like standard HTML, and it will give you a pattern for creating reusable wrappers that will let you make a variety of components that need a common design but a flexible interior.

React gives you a built-in prop called children that collects any children components. Using this makes creating wrapper components intuitivie and readable.

Unlike other props, you don’t pass children explicitly. Instead, you include the JSX as if they were HTML child elements. In other words, you just nest them inside of the element

Unlike a React component, you do not need to have a single root element as a child. That’s why the PropType for Card specified it could be an array of elements or a single element. In addition to passing the children as nested components, you are giving the card a title of Animal.

Now you have a reusable Card component that can take any number of nested children. The primary advantage of this is that you can reuse the Card with any arbitrary component. 

The Card component doesn’t care what the children are; you are just reusing the wrapper element, which in this case is the styled border and title.

4. passing components as props
modify your Card component to take other components as props. This will give your component maximum flexibility to display unknown components or JSX in multiple locations throughout the page. Unlike children, which you can only use once, you can have as many components as props, giving your wrapper component the ability to adapt to a variety of needs while maintaining a standard look and structure.

By the end of this step, you’ll have a component that can wrap children components and also display other components in the card. This pattern will give you flexibility when you need to create components that need information that is more complex than simple strings and integers.



The downside to using children is that you can only have one instance of the child prop. Occasionally, you’ll want a component to have custom JSX in multiple places. Fortunately, you can do that by passing JSX and React components as props
# tutorial for wrappers
will use for adding flex styles to UI

https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props

### basic concept of wrapper components
Wrapper components are components that surround unknown components and provide a default structure to display the child components. This pattern is useful for creating user interface (UI) elements that are used repeatedly throughout a design, like modals, template pages, and information tiles.

To create wrapper components, you’ll first learn to use the rest and spread operators to collect unused props to pass down to nested components. Then you’ll create a component that uses the built-in children component to wrap nested components in JSX as if they were HTML elements. Finally, you’ll pass components as props to create flexible wrappers that can embed custom JSX in multiple locations in a component.
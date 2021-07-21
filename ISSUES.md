// AT LOGIN
Failed to load resource: the server responded with a status of 404 (Not Found)

// WHEN TYPING THE NAME IN LOGIN
// index.js:1452 Warning: A component is changing an uncontrolled input of type undefined to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.

// FROM DEV DOCS
Controlled vs. Uncontrolled Components
React has two different approaches to dealing with form inputs.

An input form element whose value is controlled by React is called a controlled component. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.

An uncontrolled component works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.

In most cases you should use controlled components

// AT EACH KEYSTROKE DURING LOGIN
// GET http://localhost:8080/movieTracker/username//password/ 404 (Not Found)

// AFTER LOGIN SUBMITS (AT ACCOUNT PAGE)
// Uncaught TypeError: this.state.movie.map is not a function movieList.js line 40
// index.js:1452 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.


// REMEMBER TO LOOK AT YOUR app.js FOR OTHER INLINE FUNCTIONALITY

FYI
In React, we write even handlers directly on the elements in our JSX
<button
  type="button"
  onClick={() => alert("hi!")}
>
  Say hi!
</button>
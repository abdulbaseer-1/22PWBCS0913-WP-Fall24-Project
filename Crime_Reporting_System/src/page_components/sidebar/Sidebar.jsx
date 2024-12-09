import sidebar_style from "./Sidebar.module.css";
function Admin_Sidebar({className}) {
    return(
        <div className={`${sidebar_style.sidebar} ${className}`}> {/*using this syntax will allow us to use external css on this later*/}
            <a href="">Home</a>
            <a href="">Contact us</a>
            <a href="">Pending cases</a>
            <a href="">Closed Cases</a>
            <a href="">Ongoing Investigations</a>
            <a href="">Local Felonies</a>
            <a href="">Loose Suspects</a>
            <a href="">Teams</a>
            <a href="">Audit Logs</a>
            <a href="">settings</a>
        </div>
    );
}

export default Admin_Sidebar; 
 
 
/*
This was solved by me but i only asked chat gpt for confirmation, and i was correct, it took me 3 hours to realise this problem.


Yes, exactly! You are correctly applying the `className` prop to the root `div` element in the `Admin_Sidebar` component, which is great.

To ensure your external CSS (from `Sidebar.module.css`) is applied properly, here are the key steps you should follow:

1. **Import the CSS Module**: Since you are using CSS Modules, the way you import and use styles is different from regular CSS. In this case, `sidebar_style` will contain the styles from `Sidebar.module.css`, and you need to apply the classes defined there to your components.

2. **Apply the CSS Module Classes**: Use the styles from the imported `sidebar_style` object. Here’s how you can modify your `Admin_Sidebar` component:

```jsx
import sidebar_style from "./Sidebar.module.css";

function Admin_Sidebar({ className }) {
  return (
    <div className={`${sidebar_style.sidebar} ${className}`}>
      <a href="">Home</a>
      <a href="">Contact us</a>
      <a href="">Pending cases</a>
      <a href="">Closed Cases</a>
      <a href="">Ongoing Investigations</a>
      <a href="">Local Felonies</a>
      <a href="">Loose Suspects</a>
      <a href="">Teams</a>
      <a href="">Audit Logs</a>
      <a href="">Settings</a>
    </div>
  );
}

export default Admin_Sidebar;
```

Here, we are applying `sidebar_style.sidebar` (the class from your CSS Module) along with any external `className` passed as a prop.

### Why this works:
- `sidebar_style.sidebar` refers to the `sidebar` class in `Sidebar.module.css`, and it will be scoped only to this component.
- `${className}` allows you to still pass additional classes if needed from outside the component, giving you flexibility for further styling.

### Example of `Sidebar.module.css`:

```css
/* Sidebar.module.css */
/*
.sidebar {
    background-color: #f0f0f0;
    width: 250px;
    height: 100vh;
    padding: 20px;
  }
  
  .sidebar a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
  }
  
  .sidebar a:hover {
    background-color: #ddd;
  }
  ```
  
  With this setup, your `Admin_Sidebar` component should properly apply the styles from the module, and any additional styles passed via `className` will be added as well.
*/
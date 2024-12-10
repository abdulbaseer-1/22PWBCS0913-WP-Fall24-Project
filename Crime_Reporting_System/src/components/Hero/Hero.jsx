import React, { useState, useEffect, useRef } from "react";
import hero1 from "../../assets/Hero/hero1.jpg";
import hero2 from "../../assets/Hero/hero2.jpg";

import hero_style from "./Hero.module.css";

function Hero({className}) {
    const heroImages = [hero1, hero2];

    const [hero, setHero] = useState(0);

    let interval = useRef(null);

    const startInterval = () => {
        interval.current = setInterval(() => {
            setHero((prevState) => (prevState + 1) % heroImages.length);
        },5000);
    };
    const resetInterval = () => { //this structure mimics the component does unmount from react class components, refer to react class life cycle methods.
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = null;
        }
    };
    useEffect(() => { // this is for vhanging image // b/c useEffect act on every update
        //const intervalId = setInterval(function, delay); // syntax for setInterval
        startInterval();
        return () => resetInterval();
    }, [heroImages.length]); // dependencies

    const next_hero = ()=> {
        resetInterval();
        setHero((prevState) => (prevState + 1) % heroImages.length);
        startInterval();
    };
    const prev_hero = () => {
        resetInterval();
        setHero((prevState) => {
            if (prevState === 0) {
                return heroImages.length - 1; 
            } else {
                return (prevState - 1) % heroImages.length;
            }
        });

        startInterval();
    };

    return (
        <div className={`${hero_style.hero} ${className}`} onClick={next_hero}>
            <button className={hero_style.prev_btn}>&#60;</button>
            <img src={heroImages[hero]} alt="Hero" />
            <button className={hero_style.next_btn}>&#62;</button>   
        </div>
    );
}

export default Hero;


/*
Yes, `setInterval` and `clearInterval` are **inbuilt** JavaScript functions, but it's important to understand their syntax and how they work in the context of React state management.

### 1. **Understanding `setInterval` and `clearInterval`**:
These are part of the **JavaScript** standard API and are used for managing timed events.

#### `setInterval` Syntax:
```javascript
const intervalId = setInterval(function, delay);
```
- **`function`**: The function to be executed after the specified delay.
- **`delay`**: The time (in milliseconds) between each execution of the function.
- **`intervalId`**: A unique identifier returned by `setInterval`. This ID is used to clear the interval later.

#### `clearInterval` Syntax:
```javascript
clearInterval(intervalId);
```
- **`intervalId`**: The ID of the interval you want to clear. This ID is returned by `setInterval`.

---

### 2. **How `prevState` Works in `setState` (React)**:
In React, when you use the `useState` hook or `setState` in class components, React batches updates and uses the previous state value when updating the state.

#### Explanation of `prevState`:
```javascript
setHero((prevState) => (prevState + 1) % heroImages.length);
```

In this case:
- **`prevState`**: This refers to the previous state value of `hero` (i.e., the current index of the image). It is passed as an argument to the callback function provided to `setHero`.
  
  When you call `setHero`, React will **automatically** pass the current value of the state (`hero`) as `prevState` to the function you provide. This allows you to calculate the next state based on the current state.

#### How Does React Know What `prevState` Refers To?
React "knows" what `prevState` refers to because of how **state updates are handled**. When you call `setHero`, React:
- **Queues up a state update**.
- **Batches updates** to optimize performance.
- **Passes the most recent state value** (`prevState`) to the state update function to ensure the next state is based on the previous one. This is especially important in cases where state updates depend on the previous state, like in a counter or an image carousel.

This mechanism ensures React updates the state correctly, even if the update is asynchronous.

### 3. **React and `setInterval`**:
In React, you generally use `setInterval` to trigger actions (like image changes, animations, etc.) at regular intervals. The `useEffect` hook ensures that `setInterval` starts when the component is mounted and stops when the component unmounts (or when the interval is no longer needed).

#### Example of `useEffect` with `setInterval`:
```javascript
useEffect(() => {
    const interval = setInterval(() => {
        setHero((prevState) => (prevState + 1) % heroImages.length);
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
}, [heroImages.length]); // Dependencies
```
- **`useEffect`**: The effect runs once when the component mounts, and the cleanup function clears the interval when the component unmounts.
- **`setInterval`**: This sets the function to execute every 5000ms (5 seconds), changing the image every 5 seconds.
- **`clearInterval(interval)`**: The cleanup function ensures that the interval is cleared when the component unmounts, preventing memory leaks.

---

### Summary:
- **`setInterval`** is an inbuilt JavaScript function that allows you to execute a function repeatedly with a specified delay.
- **`clearInterval`** is used to stop the interval.
- **`prevState`** is the previous state value, and React automatically passes it when you update state based on the previous value. This is how React ensures your state updates are based on the latest available value.

Let me know if you need further clarification!
*/
# React-DatePick
react-datepick can be used to pick a date range in react and specify a data refresh interval.
## Demo
![media](https://github.com/iamPres/react-datepick/blob/master/media/demo-1.PNG)
![media](https://github.com/iamPres/react-datepick/blob/master/media/demo-2.PNG)
![media](https://github.com/iamPres/react-datepick/blob/master/media/demo-3.PNG)
![media](https://github.com/iamPres/react-datepick/blob/master/media/demo-4.PNG)
## Dependencies
 - install the [package.json](https://github.com/iamPres/react-datepick/blob/master/package.json) dependencies with npm

## Example Usage
```javascript
import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import DatePick from "../src/index.tsx";

const app = document.getElementById("app");

function reset() {
  console.log("Reset!");
}

function getData(data) {
  console.log(data);
}

ReactDOM.render(
  <DatePick
    resetFn={reset}
    getData={getData}
  />,
  app
);

```

## Props
- `getData(data)`
  - Called every time the user chooses a date, takes a `Date()` object
- `resetFn()`
  - Called when the refresh timer resets
- `dateFormatter` (optional)
  - Takes a `Intl.DateTimeFormat` object used to format displayed dates
  ```javascript
  dateFormatter={
      new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    }
  ```
- `theme` (optional)
  - Takes a materialUI `createMuiTheme()` object
  ```javascript
   theme={createMuiTheme({
      palette: {
        primary: purple,
        secondary: green,
      },
    })}
    ```
## Customization
 - Utilizes materialUI elements
 - Compatible with any materialUI `createMuiTheme()` object configuration
 - Add custom date formatters (11/2/2000 vs November 2, 2000)

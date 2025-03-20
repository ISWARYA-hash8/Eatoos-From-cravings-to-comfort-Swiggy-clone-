import React from "react";
import ReactDom from "react-dom/client";

const heading = (
    <h1 className = "head" tabIndex="6">
        Namaste React using JSX
    </h1>
);

const HeadingComponent = () =>(
    <div od="container">
        <h1 className = "heading">NAMASTE REACT functional component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

root.render(<HeadingComponent/>); //this is how you render a component
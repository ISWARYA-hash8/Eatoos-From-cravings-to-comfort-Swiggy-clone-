/*
*
*<div id="parent">
<div id="child1">
<h1> im h1 tag </h1>
<h2> im h2 tag </h2>
</div>
<div id="child2">
<h1> im h1 tag </h1>
<h2> im h2 tag </h2>
</div>
*</div>
*
* ReactElement(object) ===> HTML( browser understands)
*
*/
// const heading = React.createElement("h1",{
//     id:"heading",
//     xyz:"abc"
// },"hello world from React");



// console.log(heading);


// const root = ReactDOM.createRoot(document.getElementById("root"))

 
// root.render(heading);


const parent = React.createElement(
    "div",{
        id : "parent" 
    }, React.createElement(
        "div" ,{
            id : "child"
        },
       [ React.createElement("h1",{},"im an h1 tag"),React.createElement("h2",{},"im an h2 tag")],
       React.createElement(
        "div" ,{
            id : "child2"
        },
       [ React.createElement("h1",{},"im an h1 tag"),React.createElement("h2",{},"im an h2 tag")]
    )
    )
);
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

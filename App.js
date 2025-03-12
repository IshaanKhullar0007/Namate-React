import React from "react";
import ReactDOM from "react-dom/client";
const ele = React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child1'},
        [React.createElement('h1',{id:'heading'},"Hello World1"),
        React.createElement('h1',{id:'heading'},"Hello World2")]
    ),React.createElement('div',{id:'child2'},
        [React.createElement('h1',{id:'heading'},"Hello World3"),
        React.createElement('h1',{id:'heading'},"Hello World4")]
    )]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ele)
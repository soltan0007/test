import React from "react";
import ApiList from "./components/ApiList";
import "./App.css"

function App() {
    return (
        <div className="App">
            <h1>List of public APIs</h1>
            <ApiList />
        </div>
    );
}

export default App;

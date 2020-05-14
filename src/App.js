import React from 'react';
import { Router } from '@reach/router';
import {useState} from 'react';
function App() {

    const HomeComponent = () => {
        return (
            <>
            <h1>Welcome</h1>
            </>
        );
    }

    const WordComponent = (props) => {
        const [word, setword] = useState("");
        return (
            <>
            <h1>{props.word}</h1>
            </>
        );
    }

    const NumberComponent = (props) => {
        const [num, setnum] = useState("");
        return (
            isNaN(+num) ?
            <>
            <h1>{props.word}</h1>
            </> :
            <>
            <h1>{props.num}</h1>
            </>
        );
    }

    const ColoredComponent = (props) => {
        const [word, setword] = useState("");
        const [color1, setcolor1] = useState("");
        const [color2, setcolor2] = useState("");
        let styles = {
            backgroundColor: props.color2,
            color: props.color1
        }
        return (
            <>
            <h1 style={styles}>{props.word}</h1>
            </>
        );
    }

  return (
    <div className="App">
        <Router>
            <HomeComponent path="/home"/>
            <WordComponent path="/:word"/>
            <NumberComponent path="/:num"/>
            <ColoredComponent path="/:word/:color1/:color2"/>
        </Router>
    </div>
    
  );
}
export default App;

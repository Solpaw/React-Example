import { useEffect } from 'react';
import './testTile.scss';

function TestTile(props) {

    useEffect(() => {
        console.log(props.index + 1, 'ComponentDidMount')
    })

    return (
        <div className={`content-box align-items-center ${props.url ? "" : "no-img"}`}>
            <div>{props.index + 1}.</div>
            {props.url && <img src={props.url} alt="logo"/>}
            <div>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default TestTile;
import React from 'react';
import './testTile.scss';

class TestTile extends React.Component {

    componentDidMount() {
        console.log(this.props.index + 1, 'WillMount')
    }

    componentDidUpdate() {
        console.log(this.props.index + 1, 'WillUpdate')
    }

    componentWillUnmount() {
        console.log(this.props.index + 1, 'WillUnmount')
    }

    render() {
        return (
            <div className={`content-box align-items-center ${this.props.url ? "" : "no-img"}`}>
                <div>{this.props.index + 1}.</div>
                {this.props.url && <img src={this.props.url} alt="logo"/>}
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default React.memo(TestTile);
import React from 'react';
import './testTile.scss';

class TestTile extends React.Component {

    componentDidMount() {
        // console.log(this.props.index + 1, 'WillMount')
        this.props.generateComplete();
    }

    componentDidUpdate() {
        // console.log(this.props.index + 1, 'WillUpdate')
        this.props.updateComplete();
    }

    componentWillUnmount() {
        // console.log(this.props.index + 1, 'WillUnmount')
        this.props.removeComplete();
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

export default TestTile;
// export default React.memo(TestTile);
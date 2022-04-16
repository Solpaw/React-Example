import React from "react";
import './dashboard.scss';
import { connect } from 'react-redux';
import { selectList, startTimer, setOperationLimit } from '../../store/actions';
import TestTile from "./testTile/testTile";
import Header from './header/header';
import { operationComplete } from "./dashboard.service";

class Dashboard extends React.Component {
    operationCounter = 0;

    generateCounter = 0;
    updateCounter = 0;
    removeCounter = 0;

    generateComplete() {
        this.operationCounter++;
        if(this.operationCounter === this.props.operationLimit) {
            const time = performance.now() - this.props.startTime;
            this.operationCounter = 0;
            console.log('generate complete', time);
            operationComplete.next(time)
        }
    }

    updateComplete() {
        this.operationCounter++;
        if(this.operationCounter === this.props.operationLimit) {
            const time = performance.now() - this.props.startTime;
            console.log('update complete', time);
            this.operationCounter = 0;
        }
    }

    removeComplete() {
        this.operationCounter++;
        if(this.operationCounter === this.props.operationLimit) {
            const time = performance.now() - this.props.startTime;
            console.log('remove complete', time);
            this.operationCounter = 0;
        }
    }

    render() {
        const tiles = this.props.list.map(ele => {
            return <TestTile key={ele.index} url={ele.url} index={ele.index} title={ele.title} content={ele.content} 
            generateComplete={this.generateComplete.bind(this)} updateComplete={this.updateComplete.bind(this)} removeComplete={this.removeComplete.bind(this)}/>;
        })

        return (
            <main className="col-md col-12">
                <Header />

                <div className="">
                    {tiles}
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return { list: state.list, startTime: state.startTime, operationLimit: state.operationLimit };
}

export default connect(mapStateToProps, {
    selectList,
    startTimer,
    setOperationLimit,
})(Dashboard);
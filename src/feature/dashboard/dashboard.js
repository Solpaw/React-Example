import React from "react";
import './dashboard.scss';
import { connect } from 'react-redux';
import { selectList } from '../../store/actions';
import TestTile from "./testTile/testTile";
import Header from './header/header';

class Dashboard extends React.Component {
    render() {
        const tiles = this.props.list.map(ele => {
            return <TestTile key={ele.index} url={ele.url} index={ele.index} title={ele.title} content={ele.content}/>;
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
    return { list: state.list };
}

export default connect(mapStateToProps, {
    selectList
})(Dashboard);
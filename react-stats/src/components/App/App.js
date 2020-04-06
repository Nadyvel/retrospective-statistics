import StatsData from '../StatsData/index.jsx';
import { connect } from 'react-redux';
import { fetchData} from '../../store/actions';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state={
        isLoading:false,
};
        componentDidMount() {
        this.props.fetch()
        }
        componentDidUpdate(prevProps) {
            console.log(prevProps)
            console.log(this.props.statsData)
            if (this.props.statsData.metadata && !this.state.isLoading) {
                this.setState({
                    isLoading:true
                })

            }
        }
    
    render() {
        const { isLoading } = this.state
        return (
            <div>
                <h1 className='title'>
                    Sprint Retrospective Statistics
                </h1>
                {isLoading ? <StatsData data={this.props.statsData}/>:<p>Loading</p> }
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {

    return {
        statsData: state.statsData.statsData.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetch: function (val) {
            dispatch(fetchData(val));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

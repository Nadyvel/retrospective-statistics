import React from 'react';
import { connect } from 'react-redux';
import { fetchData} from '../../store/actions';
import Moment from 'moment';
import './index.css';


const StatsData = ({data}) => {

    // here I destructure data which I've got form component props to display them into browser
    let {created, merged, metadata} = data;
    let {averageInSeconds} = merged.cycleTime;
    let {from, repositorySlug, to} = metadata;

    function secondsToDays(){
        let seconds = averageInSeconds;
        let d = Math.floor(seconds / (3600*24));
        let dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
        if (averageInSeconds){
            return dDisplay;
        }
    }
    function percentageCountMerged(){
        const percentage = Math.round(created.merged / created.count * 100) +"%";
        return percentage;
    }
    function percentageCountDeclines(){
        const percentage = Math.round(created.declined / created.count * 100) +"%";
        return percentage;
    }
    function percentageCountOpen(){
        const percentage = Math.round(created.open / created.count * 100) +"%";
        return percentage;
    }
    function percentageMergedInTime(){
        const percentage = Math.round(merged.cycleTime.total / merged.count * 100) +"%";
        return percentage;
    }
    return (
        <>
          <div className='subtitle'>
            <p>Repository: {repositorySlug}</p>
            <p>{Moment(from).format('D MMM Y')} - {Moment(to).format('D MMM Y')}</p>
          </div>

            <div className='stats-data'>

                <div className='pull-requests-created'>
                    <div style={{fontSize:'80px'}}>{created.count}</div>
                    <p style={{fontSize:'20px'}}> pull requests created</p>
                </div>

                <div className='pull-requests-merged'>
                    <div style={{fontSize:'80px'}}>{merged.count}</div>
                    <p style={{fontSize:'20px'}}> pull requests merged</p>
                </div>

                <div className='created-details'>
                    <div className='merges'>
                        <div style={{fontSize:'30px',}}>{created.merged}</div>
                        <p>merges</p>
                        <p>{percentageCountMerged()}</p>
                    </div>
                    <div className='declines'>
                        <div style={{fontSize:'30px',}}>{created.declined}</div>
                        <p>declines</p>
                        <p>{percentageCountDeclines()}</p>
                    </div>
                    <div className='open'>
                        <div style={{fontSize:'30px',}}>{created.open}</div>
                        <p>remains open</p>
                        <p>{percentageCountOpen()}</p>
                    </div>
                </div>

                <div className='merged-details'>
                    <div className='files'>
                        <div style={{fontSize:'30px',}}>{merged.metrics.changedFiles}</div>
                        <p>files</p>
                    </div>
                    <div className='commits'>
                        <div style={{fontSize:'30px',}}>{merged.metrics.commitCount}</div>
                        <p>commits</p>
                    </div>
                    <div className='comments'>
                        <div style={{fontSize:'30px',}}>{merged.metrics.commentCount}</div>
                        <p>comments</p>
                    </div>
                    <div className='average-days'>
                        <div style={{fontSize:'30px',}}>{secondsToDays()}</div>
                        <p>average merge time</p>
                    </div>
                    <div className='due'>
                        <div style={{fontSize:'30px',}}>{merged.dueDate.due}</div>
                        <p>with due date</p>
                    </div>
                    <div className='merged-in-time'>
                        <div style={{fontSize:'30px',}}>{percentageMergedInTime()}</div>
                        <p>merged in time</p>
                    </div>
                </div>
            </div>
        </>

    )
}

const mapStateToProps = (state, props) => {
    return {
        statsData: state.statsData,
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        fetch: function (val) {
            dispatch(fetchData(val));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatsData);

import React from 'react';
import { Segment,Header,Button, Icon } from 'semantic-ui-react'
import {DashboardLayout} from '../component/Layout';

import ScheduleSelector from 'react-schedule-selector'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    schedule = (data) => {
        console.log(data)
    }
    handleChange = (data) => {
        console.log("from change")
        console.log(data)
    }
    render() {
        return (<div class="pages">
            <div >
               
                <Segment basic>
                    <Icon name='angle left'size='large' />
                   <span>班表</span> 
                    <Icon name='angle right' size='large' />
                </Segment>
                <ScheduleSelector
                
                    startDate={"2023/3/26"}
                    numDays={7}
                    minTime={9}
                    maxTime={21}
                    hourlyChunks={1}
                    onChange={this.handleChange}
                />
            </div>
            <Segment basic>
            <Button>修改</Button>
            <Button>安排</Button>
            <Button>儲存模板</Button>

            </Segment>
            
            <Header>3/30 9:00-10:00 復健者</Header>
            <Segment >

                <p>羅貞 20 歲 女</p>
                <p>左手：5下 右手：5下 深蹲：5下</p>
            </Segment>
            <Segment>

                <p>火腿 20 歲 女</p>
                <p>左手：5下 右手：5下 深蹲：5下</p>
            </Segment>
        </div>)
    }
}

export default Home = {
    routeProps: {
        path: "/home",
        element: <Home/>
    }
}
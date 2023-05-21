import React from 'react';
import { Segment, Header, Button, Icon, Grid, List, Image } from 'semantic-ui-react'
import { DashboardLayout } from '../component/Layout';
import { Link, matchPath, matchRoutes, useLocation, useParams } from 'react-router-dom'
import Chart from "react-apexcharts";

import ScheduleSelector from 'react-schedule-selector'

class Invite_detail extends React.Component {
    
    constructor(props){
    super(props);
    console.log(props)
     let param=window.location.href.split("/")
     let l=param.length-1
     this.state={
        id:param[l]
     }
    }
   

    render() {
        return (<div>
            <Segment>邀約暱稱{this.state.id}</Segment>

        </div>)
    }
}

export default Invite_detail = {
    routeProps: {
        path: "invite/:id",
        element: <Invite_detail />
    }
}
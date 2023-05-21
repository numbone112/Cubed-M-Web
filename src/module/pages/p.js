import React from 'react';
import { Segment, Header, Button, Icon, Grid, List, Image, Item } from 'semantic-ui-react'
import { DashboardLayout } from '../component/Layout';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom'

import ScheduleSelector from 'react-schedule-selector'

class PHome extends React.Component {
    constructor() {
        super()
        this.state = {

            series: [{
                name: 'Series 1',
                data: [3, 3, 5],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                title: {
                    text: '復健綜合圖表'
                },
                xaxis: {
                    categories: ['左手', '右手', '下肢']
                }
            },


        };
    }
    render() {
        return (<>
            <Grid padded >
                <Grid.Row>
                    <Grid.Column width={"16"} textAlign='center' >
                        <Segment>個人資訊</Segment>
                    </Grid.Column>
                    <Grid.Column width={"4"} textAlign='center'>
                        name
                    </Grid.Column>
                    <Grid.Column width={"4"} textAlign='center'>
                        sex
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row >

                    <Grid.Column largeScreen={8} tablet={16}>


                        <Segment>復健分析</Segment>
                        <div>總復健次數：5次</div>
                        <div>復健綜合等級</div>
                        <div>

                            <Chart options={this.state.options} series={this.state.series} type="radar" height={350} />

                        </div>
                    </Grid.Column>
                    <Grid.Column largeScreen={8} tablet={16}>
                        <div>
                            <Segment>預約</Segment>
                            <p>暫無預約</p>
                            <Segment basic textAlign={"right"}>
                                <Button>預約</Button>
                            </Segment>
                        </div>
                        <div>
                            <Segment textAlign='center' > 歷史復健紀錄
                            </Segment>
                            <Segment basic textAlign='right'>
                                <Button >更多</Button>

                            </Segment>
                            <List celled >

                                <List.Item>
                                    <Link color='black' to={`/invite/5`} >
                                        <List.Content >
                                            <List.Header>復健師，or 召集人 or 邀約暱稱</List.Header>
                                            <Item.Meta >5/14 9:00</Item.Meta>
                                            <Item.Extra>召集人</Item.Extra>
                                        </List.Content>
                                    </Link>

                                </List.Item>
                                <List.Item>
                                    <Link color='black' to={`/invite/6`} >
                                        <List.Content >
                                            <List.Header>復健師，or 召集人 or 邀約暱稱</List.Header>
                                            <Item.Meta >5/14 14:00</Item.Meta>
                                            <Item.Extra>召集人</Item.Extra>
                                        </List.Content>
                                    </Link>

                                </List.Item>
                                <List.Item>
                                    <Link color='black' to={`/invite/7`} >
                                        <List.Content >
                                            <List.Header>復健師，or 召集人 or 邀約暱稱</List.Header>
                                            <Item.Meta >5/15 9:00</Item.Meta>
                                            <Item.Extra>召集人</Item.Extra>
                                        </List.Content>
                                    </Link>

                                </List.Item>
                            </List>
                        </div>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>)
    }
}

export default PHome = {
    routeProps: {
        path: "/phome",
        element: <PHome />
    }
}
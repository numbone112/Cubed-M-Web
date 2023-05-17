
import React from 'react';

import style from "../../css/sign.module.css"
import { trackPromise } from 'react-promise-tracker';
import { Grid, Button, Input, Image, Select, Segment, Form,Header,Message } from 'semantic-ui-react'
import { sha256 } from 'js-sha256';

class Base extends React.Component {

    render() {
        return (<>

            <Grid textAlign={"center"}   >
                <Grid.Row  >
                    <Grid.Column width={1} only={"computer tablet"}  >
                        <div className={style.back} ></div>
                    </Grid.Column>
                    {/* <Grid.Column width={ 1 } only="computer tablet"></Grid.Column> */}
                    <Grid.Column width={8} mobile={14} computer={8} tablet={8} className={style.backC} textAlign={"center"} verticalAlign={"middle"}>
                        <div className={style.homeKey} >
                            {/* <a href="./#/"><Image src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fsimple-minimalist-cartoon-cute-cat-logo_24711350.htm&psig=AOvVaw1oVF65qKNF-vtKFk0WzLco&ust=1680195464168000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDmsoDOgf4CFQAAAAAdAAAAABAE"} className={style.homeKey} /></a> */}
                        </div>
                        <div>
                            {this.props.content}
                        </div>

                    </Grid.Column>
                    {/* <Grid.Column width={ 1 } only="computer tablet"></Grid.Column> */}
                </Grid.Row></Grid>


        </>)
    }
}

class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": "",
        }
    }

    send = () => {

        let account = document.getElementById("account").value
        let psw = sha256(document.getElementById("password").value)
        let age = document.getElementById("birth").value
        let sex = this.state.sex
        let city = this.state.city_id
        let name = document.getElementById("name").value
        let phone = document.getElementById("phone").value
        trackPromise(

        )

    }
    // showinfo = (msg) => {
    //     this.setState({ showinfo: !this.state.showinfo, message: msg })
    // }

    sexChange = (event, sex) => this.setState({ "sex": sex.value })

    cityChange = (event, city) => this.setState({ "city_id": city.value })
    degreeChange = (event, degree) => this.setState({ "degree": degree.value })


    render() {
        const sexList = [{ value: "男", text: "男" }, { value: "女", text: "女" }]
        return (<Base content={< >
            <Grid centered textAlign={"center"} >
                <Grid.Row >
                    <Grid.Column width={12} textAlign={"center"}>
                        <Segment raised >
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div><Input className={style.select} placeholder='帳號' id="account" /></div>
                                <div><Input className={style.select} type="text" placeholder="暱稱" id="name" /></div>
                                <div><Input className={style.select} type="password" placeholder="密碼" id="password" /></div>
                                <div><Input className={style.select} type="password" placeholder="確認密碼" id="checkpsd" /></div>

                                <div><Select className={style.select} id="sex" placeholder="性別" options={sexList} onChange={this.sexChange} /></div>
                                <p class="text-gray-400 flex px-1"><span class="flex-none self-center">生日：</span><span class='flex-none'><Input className={style.birth} type="date" id="birth" /></span></p>
                                <div class="pb-1"><Select className={style.select} id="city" placeholder="居住地" options={this.state.city} onChange={this.cityChange} /></div>
                                <p><Input className={style.select} type="phone" placeholder="手機號碼" id="phone" /></p>
                                <p>{this.state.errorMes ? this.state.errorMes : ""}</p>
                            </div>
                            <p className={style.csign}>
                                點擊「繼續註冊」即表示你同意我們的 <a href="./#/information/" target="_blank">《服務條款》</a>、
                                <a href="./#/information/" target="_blank">《資料政策》</a>和<a href="./#/information/" target="_blank">《Cookie 政策》</a>。
                            </p>
                            <p><Button id="continue" variant="secondary" className={style.continue} onClick={this.send} >繼續註冊</Button></p>

                            <a href="./#/login">已有帳號  &nbsp; &nbsp; <h5>登入</h5></a>
                        </Segment>

                    </Grid.Column>
                    <Grid.Column width={6}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </ >}></Base>)
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": ""
        }
    }

    send = () => {
        var account = document.getElementById("account").value
        var password = sha256(document.getElementById("password").value);
        trackPromise(

        )
    }
    render() {
        return (<Base content={<div className={style.need_to_center}>
            <Grid textAlign={"center"}> <Grid.Row>
                <Grid.Column computer={10} tablet={13} mobile={16}>
                    <Segment raised padded>
                        <Form.Group>
                            <p><Input focus placeholder="帳號" id="account" /></p>
                            <p><Input type="password" focus placeholder="密碼" id="password" /></p>
                            <p>   <Button id="continue" className={style.loginBtn} onClick={this.send}>登入</Button></p>
                            <p>{this.state.errorMes ? this.state.errorMes : ""}</p>

                        </Form.Group>
                        <a href="./#/sign" >沒有帳號  &nbsp; &nbsp; <h5>註冊</h5></a>
                    </Segment>
                </Grid.Column>
            </Grid.Row></Grid>
        </div>}></Base>)
    }
}

class Login2 extends React.Component{

    render(){
        return(<>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://www.creativefabrica.com/wp-content/uploads/2021/02/25/A-Little-Smiling-Cat-Logo-Funny-Kitty-Graphics-8951643-1-1-580x386.jpg' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
<p class="text-blue-600/100">The quick brown fox...</p>

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
        </>)
    }
}


export const sign = {
    routeProps: {
        path: "/sign",
        element: <Sign />
    }
}

export const login = {
    routeProps: {
        path: "/login",
        element: <Login />
    }
}

export const login2={
    routeProps: {
        path: "/login2",
        element: <Login2 />
    }
}
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
import ViewBase from "../ViewBase";
import Login from "./children/Login"
import QRCode from "qrcode.react";
import LoginController from "../../class/login/LoginController"
import HeaderController from "../../class/header/HeaderController"

import './stylus/header.styl'

export default class Header extends ViewBase {
    constructor(props) {
      super(props);
      this.state = {
        showLogin: false,     //是否显示登录框
        top1: 0,              //轮播参数
        top2: 40,
        word: "",          //搜索框-输入
        marketList: [],
      };
      this.pollingTimer = null;       //轮询-计时器
    }

    async pollingMarket(){
        this.pollingTimer && clearTimeout(this.pollingTimer);
        let data = await HeaderController().getMarket();
        if(!data.msg){
          let {markets,newsNum} = data;
          this.setState({marketList: markets});
          this.bus.emit("updateNewsNum",newsNum);
        }
        this.pollingTimer = setTimeout(()=>{
            this.pollingMarket();
        },5000);
    }

    componentDidMount() {
        //轮播
        let {top1, top2} = this.state;
        this.swiper("carousel", top1, top2, [0, 40], 5, 5000,(layer,layerCache)=>{
            this.setState({top1: layer, top2: layerCache});
        });

        //监听登录框是否显示
        this.bus.on("showLoginDialog","header",()=>{
            this.setState({showLogin: true});
        });
        //头部市场轮询
        this.pollingMarket();
    }

    componentWillUnmount() {
        this.bus.off("showLoginDialog","header");
        this.pollingTimer && clearTimeout(this.pollingTimer);
    }

    async logout(){
        let data = await LoginController().logout();
        if(!data.msg){
          location.reload();
        }
    }

    render() {
        let {showLogin, top1, top2, word} = this.state;
        let isLogin = LoginController().isLogin();
        let {userPhone} = LoginController().loginInfo;
        let marketList = this.state.marketList || [];

        return (
          <div className="header">
              {/*价格轮播*/}
              <div className="price-wrap">
                  <div className="price">
                      <ul style={{top: top1}}>
                        {marketList.map(({name,logo,rise,unit,price},index) =>
                          <li key={index}>
                              <img src={logo}/>
                              <span>{name}</span>
                              <i className={rise>0 ? "up":"down"}>{unit}{price}({rise}%)</i>
                          </li>)}
                      </ul>
                      <ul style={{top: top2}}>
                        {marketList.map(({name,logo,rise,unit,price},index) =>
                          <li key={index}>
                              <img src={logo}/>
                              <span>{name}</span>
                              <i className={rise>0 ? "up":"down"}>{unit}{price}({rise}%)</i>
                          </li>)}
                      </ul>
                  </div>
              </div>
              {/*顶部菜单栏*/}
              <div className="nav-wrap">
                  <div className="nav">
                      {/*logo*/}
                      <img className="logo" src={this.imageDict.$icon_logo}/>
                      {/*左侧菜单项*/}
                      <div className="nav-left">
                          <NavLink to="/home" activeClassName="active">首页</NavLink>
                          <NavLink to="/project" activeClassName="active">项目库</NavLink>
                          <NavLink to="/news" activeClassName="active">快讯</NavLink>
                          <p className="srch">
                              <input type="text" placeholder="搜索ico项目、文章、快讯"
                                      value={word}
                                      onInput={e=>this.setState({word: e.target.value})}/>
                              <i onClick={()=>{
                                this.props.history.push({pathname: "/search", state:{word: word}});
                                this.bus.emit("onSearch",word);
                              }}/>
                          </p>
                      </div>
                      {/*右侧菜单项*/}
                      <div className="nav-right">
                          {/*分享*/}
                          <div className="ri">
                              <i className="share"/>
                          </div>
                          {/*微信*/}
                          <div className="ri">
                              <i className="wechat"/>
                              <div className="drop wechat-drop">
                                  <QRCode value="http://www.baidu.com?word=每日必读" size={96}/>
                              </div>
                          </div>
                          {/*登录注册, 个人中心*/}
                          {!isLogin ?
                              <div className="ri">
                                  <a onClick={()=>this.setState({showLogin: true})}>登录/注册</a>
                              </div>
                                :
                              <div className="ri">
                                  <a>{userPhone && userPhone.formatPhone()}</a>
                                  <ul className="drop person-drop">
                                      <li onClick={()=>this.props.history.push("/person/collect")}>
                                          <img src={this.imageDict.$icon_collect_big_normal}/>
                                          <span>我的收藏</span>
                                      </li>
                                      <li onClick={this.logout.bind(this)}>
                                          <img src={this.imageDict.$icon_menu_quit}/>
                                          <span>退出</span>
                                      </li>
                                  </ul>
                              </div>}
                      </div>
                  </div>
              </div>
              {/*登录组件*/}
              {showLogin && <Login onHide={()=>this.setState({showLogin: false})}/>}
          </div>
        )
    }
}

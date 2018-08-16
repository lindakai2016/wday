import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ViewBase from "../../ViewBase";
import Progress from "../../../common/components/Progress"
import ProjectController from "../../../class/project/ProjectController"


export default class Home extends ViewBase {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="project-wrap">
                {/*进行中*/}
                <div className="project">
                    <h3 className="doing">进行中</h3>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num doing">$500万/$1000万</span>
                            <span className="percent doing">65%</span>
                            <span className="remain">剩余9天</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num doing">$500万/$1000万</span>
                            <span className="percent doing">65%</span>
                            <span className="remain">剩余9天</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num doing">$500万/$1000万</span>
                            <span className="percent doing">65%</span>
                            <span className="remain">剩余9天</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num doing">$500万/$1000万</span>
                            <span className="percent doing">65%</span>
                            <span className="remain">剩余9天</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    {/*查看全部*/}
                    <a className="more">查看全部30个项目</a>
                </div>

                {/*即将开始*/}
                <div className="project">
                    <h3 className="prepare">即将开始</h3>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="remain">目标：</span>
                            <span className="num prepare">$500万/$1000万</span>
                            <span className="remain">倒计时12h</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="remain">目标：</span>
                            <span className="num prepare">$500万/$1000万</span>
                            <span className="remain">倒计时12h</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="remain">目标：</span>
                            <span className="num prepare">$500万/$1000万</span>
                            <span className="remain">倒计时12h</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="remain">目标：</span>
                            <span className="num prepare">$500万/$1000万</span>
                            <span className="remain">倒计时12h</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    {/*查看全部*/}
                    <a className="more">查看全部30个项目</a>
                </div>

                {/*已结束*/}
                <div className="project">
                    <h3 className="finish">已结束</h3>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num finish">$500万/$1000万</span>
                            <span className="percent finish">65%</span>
                            <span className="remain">终:06-25</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num finish">$500万/$1000万</span>
                            <span className="percent finish">65%</span>
                            <span className="remain">终:06-25</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num finish">$500万/$1000万</span>
                            <span className="percent finish">65%</span>
                            <span className="remain">终:06-25</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    <div className="pi">
                        {/*项目图标，简称，详细名称*/}
                        <p className="name">
                            <img src="/static/web/icon_coin_five@3x.png"/>
                            <b>ISU</b>
                            <span>Action H…</span>
                        </p>
                        {/*项目标签*/}
                        <p className="badge">
                            <i>#智能合约#</i>
                            <i>#内容版权#</i>
                        </p>
                        {/*项目进度*/}
                        <p className="step">
                            <span className="num finish">$500万/$1000万</span>
                            <span className="percent finish">65%</span>
                            <span className="remain">终:06-25</span>
                        </p>
                        <Progress step={60}/>
                        {/*分隔线*/}
                        <p className="br"/>
                    </div>
                    {/*查看全部*/}
                    <a className="more">查看全部30个项目</a>
                </div>

            </div>
        );
    }
}
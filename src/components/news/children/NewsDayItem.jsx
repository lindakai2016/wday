import React from 'react';
import ViewBase from "../../ViewBase";
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import Thumbs from "../../../common/components/thumbs/index";
import Alert from "../../../common/components/Alert";
import NewsController from "../../../class/news/NewsController";

export default class NewsDayItem extends ViewBase {
  constructor(props) {
    super(props);
    let {dayDate, news, showList, dayis} = props;
    let time = new Date(dayDate * 1000);
    this.state = {
        cardMonth: time.dateHandle("MM"),
        cardDay: time.dateHandle("dd"),
        cardDayis: dayis,
        cardWeek: time.dateHandle("www"),
        showList: showList,
        showAlert: false
      };
    this.copyLink = this.copyLink.bind(this);
  }

  copyLink(msg) {
    let input = document.createElement("input");
    input.value = msg;
    document.body.appendChild(input);
    if(this.copy(input)) {
      this.setState({
        showAlert: true
      });
    }
    document.body.removeChild(input);
  }

  render() {
    let { history, titleLen, contentLen, news } = this.props;
    return (
      <div className="news-day-item">
        {/* 每天的日历卡片 */}
        <div className="date-card">
          <div className="date-card-main">
            <p className="month">{this.state.cardMonth}</p>
            <p className="day">{this.state.cardDay}</p>
          </div>
          <div className="date-card-other">
            <p className="date-is">{this.state.cardDayis}</p>
            <p className="week">{this.state.cardWeek}</p>
          </div>
          {
            this.state.showList &&
            <div className="jump" onClick={()=>history.push('/news/list')}>
            </div>
          }
        </div>
        {/* 每天的快讯*/}
        {
          news && news.map((v, index) =>
            <div className="news-item" key={index}>
              <div className="news-time">
                <span>19: 00</span>
              </div>
              {/* 时间线 最后一个没有样式，实现快讯之间相连 */}
              <div className={"time-line" + ((index === news.length -1) ? "last" : "") }><i></i></div>
              <div className="news-main">
                <div className="for-hover">
                  <div className="news-title" onClick={()=>history.push(`/news/detail?id=${v.id}`)} >
                    {
                      v.title && v.title.length > titleLen ? v.title.shearStr(titleLen) : v.title
                    }
                  </div>
                  <div className="news-content" >
                    {
                      v.content && v.content.length > contentLen ? v.content.shearStr(contentLen) : v.content
                    }
                  </div>
                </div>
                <div className="news-thumbs">

                  <Thumbs id={v.id} goodCount={v.like} badCount={v.dislike} share={this.copyLink.bind(this, `${v.title} ${window.location.origin}/news/detail?id=${v.id}`)}/>
                </div>
              </div>

            </div>
          )
        }
        {/* 提示 */}
        {
          this.state.showAlert &&
          <Alert content="复制成功" onClose={()=>this.setState({showAlert: false})}/>
        }

      </div>
    );
  }

}
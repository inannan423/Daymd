import React, { Component } from "react";

class ScrollToTop extends Component {
  constructor(props) {
    super(props);

    //show为true时回到顶部按钮显示，false时隐藏
    this.state = {
      show: false,
    };
    //将函数里的this指向绑定到当前组件，也就是组件ScrollToTop
    this.changeScrollTopShow = this.changeScrollTopShow.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  //挂载事件监听
  componentDidMount() {
    window.addEventListener("scroll", this.changeScrollTopShow);
  }
  //卸载事件监听
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeScrollTopShow);
  }
  render() {
    const { show } = this.state;
    return (
      //ScrollToTopWrapper是一个由styled-components定义的样式组件，其本质
      //是一个div标签
      <button class="btn btn-outline btn-info">
        {
          // 逻辑与符号左边的show为true时返回右边的html标签
          show && (
            <div className="scrollTop" onClick={this.scrollToTop}>
              <span className="iconfont icon-dingbu"></span>
            </div>
          )
        }
      </button>
    );
  }
  //控制show的状态从而控制回到顶部按钮的显示和隐藏
  changeScrollTopShow() {
    if (window.pageYOffset < 400) {
      this.setState({
        show: false,
      });
    } else {
      this.setState({
        show: true,
      });
    }
  }
  //添加动画效果
  scrollToTop() {
    const scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 1);
  }
}

//导出组件
export default ScrollToTop;

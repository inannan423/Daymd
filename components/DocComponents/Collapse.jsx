import React from "react";
export function Collapses(props) {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);
  const style = {
    collapsed: {
      display: "none",
    },
    expanded: {
      display: "block",
    },
    buttonStyle: {
      display: "block",
    },
  };

  return (
    <div className="ml-5 mb-5 w-max flex flex-col  justify-center items-center">
      <button
        className="mx-5 mt-5 btn btn-block btn-outline btn-ghost"
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "OPEN" : "CLOSE"} Menu
      </button>
      <div
        className="h-max w-max mt-3"
        // 决定显示和折叠
        style={isCollapsed ? style.collapsed : style.expanded}
        // aria-expanded 是给 Screen Reader 用来 判断当前元素状态的辅助属性
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}

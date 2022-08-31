import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import configs from "../daymd.config";

function Nav() {
  return (
    <div
      className={`shadow-sm backdrop-blur-md  w-screen  navbar  bg-base-100 ${configs.navOpacity}`}
    >
      <div class="navbar-start">
        <div style={{ zIndex: "1000" }} class="dropdown">
          <label tabIndex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {configs.navItems.map((props, idx) => (
              <li key={idx} {...props}>
                <Link href={props.to}>{props.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <div class="avatar">
          <div class="w-11 rounded-xl">
            <img
              style={{
                display: configs.isNavLogo ? "block" : "none",
              }}
              src={configs.navLogo}
            />
          </div>
        </div>
        <Link href="/">
          <a class="btn font-sans btn-ghost normal-case text-xl">
            {configs.title}
          </a>
        </Link>
      </div>

      <div class="navbar-end">
        {configs.navIcons.map((props, idx) => (
          <a href={props.to} key={idx} {...props} target={"_blank"}>
            <button class="btn btn-ghost btn-circle  h-2 p-3">
              <img src={props.icon} alt={props.name} />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div
      className={`shadow-sm backdrop-blur-md  w-screen  navbar  bg-base-100 ${configs.navOpacity}`}
    >
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-100 rounded-box w-52"
          >
            {configs.navItems.map((props, idx) => (
              <li key={idx} {...props}>
                <Link href={props.to}>{props.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div class="avatar">
          <div class="w-11 rounded-xl">
            <img
              style={{
                display: configs.isNavLogo ? "block" : "none",
              }}
              src={configs.navLogo}
            />
          </div>
        </div>
        <Link href="/">
          <a class="btn btn-ghost normal-case text-xl">{configs.title}</a>
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {configs.navItems.map((props, idx) => (
            <li key={idx} {...props}>
              <Link href={props.to}>{props.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div class="navbar-end">
        {configs.navIcons.map((props, idx) => (
          <a href={props.to} key={idx} {...props} target={"_blank"}>
            <button class="btn btn-ghost btn-circle h-2 p-3">
              <img src={props.icon} alt={props.name} />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export function NavBar() {
  if (configs.navTheme === 1) {
    return <Nav />;
  } else if (configs.navTheme === 2) {
    return <Nav2 />;
  }
}

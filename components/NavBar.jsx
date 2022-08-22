import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import configs from "../daymd.config";

function Toggle() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <select data-choose-theme class="select  h-5 w-17 ">
      <option value="forest">Forest</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
      <option value="forest">Forest</option>
      <option value="night">Night</option>
      <option value="valentine">Valentine</option>
    </select>
  );
}

function Nav() {
  return (
    <div class="backdrop-blur-md bg-opacity-10  z-50 navbar fixed bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li> */}
            {configs.navItems.map((props, idx) => (
              <li key={idx} {...props}>
                <a>{props.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        {/* <img
          class="w-10"
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo.svg"
        /> */}
        <div class="avatar">
          <div class="w-11 rounded-xl">
            <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo.svg" />
          </div>
        </div>
        <a class="btn btn-ghost normal-case text-xl">{configs.title}</a>
      </div>

      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export function NavBar() {
  return <Nav />;
}

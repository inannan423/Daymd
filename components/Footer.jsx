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
    <div>
      <select data-choose-theme class="select  h-5 w-17 ">
        {configs.themeSelect.map((props, idx) => (
          <option key={idx} {...props} value={props.theme}>
            {props.theme}
          </option>
        ))}
      </select>
    </div>
  );
}

function Foot() {
  return (
    <div>
      <footer
        style={{
          display: configs.ifFootItems ? "" : "none",
        }}
        class="z-50 footer p-10 bg-base-200 text-base-content"
      >
        {configs.FooterItems.map((props, idx) => (
          <div key={idx} {...props}>
            <span class="footer-title">{props.label}</span>
            {props.items.map((p, i) => (
              <a
                href={p.to}
                target={p.blank ? "_blank" : ""}
                // target={"_blank"}
                key={i}
                {...p}
                class="link link-hover"
              >
                {p.name}
              </a>
            ))}
          </div>
        ))}
        {/* 是否显示主题切换 */}
        <div
          style={{
            display: configs.showTheme ? "" : "none",
          }}
        >
          <span class="footer-title">Theme</span>
          <div>
            <Toggle />
          </div>
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div class="items-center flex-row">
          <div class="avatar">
            <div class="w-11 rounded-xl">
              <img src={configs.footLogo} />
            </div>
          </div>
          <div>
            <strong>{configs.footText}</strong>
            <br />
            {configs.footTextNormal}
            <br />
            <div className="font-mono">
              Built with{" "}
              <a
                className="text-primary "
                href="https://daymd.netlify.app"
                target={"_blank"}
              >
                Daymd.
              </a>{" "}
            </div>
          </div>
        </div>

        <div class="md:place-self-center md:justify-self-end">
          <div
            style={{
              display: configs.ifFootTheme ? "" : "none",
            }}
          >
            <div>
              <Toggle />
            </div>
          </div>
          <div class="grid grid-flow-col gap-4">
            {configs.socialIcon.map((props, idx) => (
              <a href={props.to} key={idx} {...props} target={"_blank"}>
                <button class=" btn btn-ghost btn-circle">
                  <img class="w-8" src={props.icon} alt={props.name} />
                </button>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Footer() {
  return <Foot />;
}

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import WebsiteCard from "../../components/WebsiteCard";
import ReactTooltip from "react-tooltip";
import { websiteData } from "../../navData/website";
import styles from "../../styles/website.module.css";
import { NavBar } from "../../components/NavBar";
import configs from "../../daymd.config";
import Parallax from "react-rellax";
function Back() {
  return (
    <div
      className="z-10 w-screen h-64 "
      style={{
        backgroundImage: configs.navBanner,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: configs.ifNavBanner ? "" : "none",
      }}
    ></div>
  );
}

function CategoryNav() {
  const sidebar = {
    title: configs.navTitle,
    items: websiteData.map((w) => ({ title: w.name, permalink: `#${w.name}` })),
  };

  return (
    <nav className="sticky top-20 pl-10">
      <div className="text-xl font-extrabold">{sidebar.title}</div>
      <ul className="text-sm font-medium pt-1">
        {sidebar.items.map((item) => (
          <li
            key={item.permalink}
            className="py-1 transition-all 1s ease-in hover:text-primary"
          >
            <Link
              href={item.permalink}
              className="text-primary"
              // activeClassName={styles.sidebarItemLinkActive}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CategoryList() {
  return (
    <div className={styles.category}>
      {websiteData.map((cate) => (
        <div key={cate.name}>
          <div className={styles.cateHeader}>
            <h2 id={cate.name} className="text-xl py-5">
              {cate.name}
              <a
                className="hash-link"
                href={`#${cate.name}`}
                title={cate.name}
                target={"_blank"}
              ></a>
            </h2>
          </div>
          <section>
            <ul className={styles.websiteList}>
              {cate.websites.map((website) => (
                <>
                  <WebsiteCard key={website.name} website={website} />
                  <ReactTooltip
                    id="website-desc-tip"
                    effect="solid"
                    place="bottom"
                    type="info"
                  />
                </>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
}

export default function Websites() {
  const title = "Links";
  const description = "Frequently used links";

  return (
    <>
      <div>
        <div style={{ zIndex: "1000" }} className="z-50 fixed">
          <NavBar />
        </div>
        <Back />
        <div className="grid grid-cols-6 px-10 gap-4">
          <div className="hidden xl:block col-span-1 py-5  sticky">
            <CategoryNav />
          </div>
          <div
            className={`col-span-5  pb-5 `}
            style={{ paddingTop: configs.ifNavBanner ? "0" : "4rem" }}
          >
            <CategoryList />
          </div>
        </div>
      </div>
    </>
  );
}

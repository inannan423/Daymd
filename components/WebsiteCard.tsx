import React, { memo } from "react";
import clsx from "clsx";
import Link from "next/link";
import styles from "../styles/styles.module.css";
import { type Website } from "../navData/website";

const WebsiteCard = memo(({ website }: { website: Website }) => (
  <li
    key={website.name}
    className="hover:bg-primary hover:bg-opacity-30 transition-all 1s ease-in-out grid grid-cols-6 justify-items-center p-1 border-2 border-primary rounded-md "
  >
    <img
      src={
        // typeof website.logo === "string"
        //   ? website.logo
        //   : (website.logo as any)?.src?.src
        website.logo
      }
      alt={website.name}
      className="col-span-2  self-center w-16 h-16 rounded-full ring ring-primary ring-offset-1"
    />
    <div className="pl-4 flex flex-col place-content-start  self-center col-span-3 content-start">
      <div className={clsx(styles.websiteCardHeader)}>
        <h4 className="text-base pt-1 font-bold">
          <a
            href={website.href}
            target={"_blank"}
            className={styles.websiteCardLink}
          >
            {website.name}
          </a>
        </h4>
      </div>
      <p className={styles.websiteCardDesc} data-for="website-desc-tip">
        {website.desc}
      </p>
    </div>
  </li>
));

export default WebsiteCard;

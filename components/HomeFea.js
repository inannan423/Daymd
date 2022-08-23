import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect } from "react";
const FeatureList = [
  {
    title: "A front-end enthusiast.",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner1.svg",
  },
  {
    title: "Now studying at BJFU.",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner2.svg",
  },
  {
    title: "Digital Media Learner",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner3.svg",
  },
];

function Feature({ file, title, description }) {
  return (
    <div>
      <div className="text-center">
        <image src={file}></image>
      </div>
      <div className="text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

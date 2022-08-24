import cn from "classnames";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import type { GetStaticProps } from "next";

import { PageLayout } from "../../components/layouts";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default function PostsPage() {
  return (
    <PageLayout>
      <main className={cn("grow mx-auto my-10 space-y-2 max-w-2xl w-full")}>
        <h1
          className={cn(
            "px-4 py-2 w-fit border-b-8 text-5xl font-semibold",
            "border-theme-500"
          )}
        >
          2022
        </h1>
        <h2 className={cn("px-4 py-2 w-fit text-2xl font-semibold")}>
          Writing...
        </h2>
      </main>
    </PageLayout>
  );
}

import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation();
  return <div>{t("home")}</div>;
}

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["home"])),
  },
});

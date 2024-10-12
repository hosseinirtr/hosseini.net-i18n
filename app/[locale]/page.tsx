"use client";
import { useTranslations } from "next-intl";
import AboutMe from "./about_me/page";
import Contact from "./contact/page";
// import Work from "./project/page";
import Projects from "./project/page";
import Resume from "./resume/page";
import Services from "./services/page";

export default function RootPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Home");

  return (
    <div>
      <main className="flex flex-col">
        <div className="min-h-screen snap-center">
          <AboutMe />
        </div>

        <div className="min-h-screen snap-center">
          <h2 className="text-4xl text-center my-8">{t("Resume")}</h2>
          <Resume />
        </div>

        <div className="min-h-screen snap-center mt-32">
          <h2 className="text-4xl text-center">{t("Services")}</h2>
          <Services />
        </div>
        <div className="min-h-screen snap-center">
          <h2 className="text-4xl text-center my-8">{t("Projects")}</h2>
          <Projects />
        </div>

        <div className="min-h-screen snap-center">
          <h2 className="text-4xl text-center my-8">{t("Contact")}</h2>
          <Contact />
        </div>
      </main>
    </div>
  );
}

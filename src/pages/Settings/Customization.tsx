import { motion } from "framer-motion";
import { tabContentVariant, settingsPageVariant } from "./Variants";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";
import ThemeDropdown from "./ThemeDropdown";

function Customization({ id, active }) {
  const { t } = useTranslation();

  const particles = [
    { id: "none", label: t("settings.theme.particlesNone") },
    { id: "/crismas.json", label: t("themes.crismas") }
  ];

  return (
    <motion.div
      role="tabpanel"
      id={id}
      className="tab-content"
      variants={tabContentVariant}
      animate={active ? "active" : "inactive"}
      initial="inactive"
    >
      <motion.div
        variants={settingsPageVariant}
        className="content-card flex w-full flex-row flex-wrap justify-center gap-4"
      >
        <div className="flex h-64 w-80 flex-col flex-wrap content-center items-center rounded-lg border border-input-border-color bg-lighter p-2 text-center">
          <div className="p-2 text-3xl font-bold text-input-text">
            {t("settings.theme.title")}
          </div>
          <div className="text-md p-4 font-bold text-input-text">
            {t("settings.theme.subtitle")}
          </div>
          <ThemeDropdown />
        </div>
        <div className="flex h-64 w-80 flex-col flex-wrap content-center items-center rounded-lg border border-input-border-color bg-lighter p-2 text-center">
          <div className="p-2 text-3xl font-bold text-input-text">
            {t("settings.theme.particles")}
          </div>
          <div className="text-md p-4 font-bold text-input-text">
            {t("settings.theme.particlesDesc")}
          </div>
          <Dropdown storageKey="particles" options={particles} refresh={true} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Customization;

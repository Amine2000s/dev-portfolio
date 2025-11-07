import { motion } from "framer-motion";
import TitleTwo from "./ui/TitleTwo";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ContactCard from "./contact/ContactCard";
import templateData from "../../templateOneData.json";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const data = templateData.Contact.contact;
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative my-32 mx-auto max-w-6xl px-4 space-y-10"
    >
      <TitleTwo gradient={templateData.Contact.title}>{t("contact.title")}</TitleTwo>

      <p className="text-lg font-medium text-white/60 max-w-3xl text-center mx-auto mb-12">
        {t("contact.description")}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <ContactCard
          title={t("contact.email")}
          icon={<FiMail className="text-4xl text-blue-500" />}
          value={data.email}
          color={{
            primary: "text-blue-400",
            secondary: "bg-blue-500/20",
            hover: "bg-blue-500/30",
          }}
          link={{
            href: `mailto:${data.email}`,
          }}
        />

        <ContactCard
          title={t("contact.phone")}
          icon={<FiPhone className="text-4xl text-green-500" />}
          value={data.phone}
          color={{
            primary: "text-green-400",
            secondary: "bg-green-500/20",
            hover: "bg-green-500/30",
          }}
          link={{
            href: `https://wa.me/${data.phone.replace(/[^0-9]/g, "")}`,
            icon: <FaWhatsapp className="text-green-500 text-xl" />,
          }}
        />

        <ContactCard
          title={t("contact.location")}
          icon={<FiMapPin className="text-4xl text-purple-500" />}
          value={data.location}
          color={{
            primary: "text-purple-400",
            secondary: "bg-purple-500/20",
            hover: "bg-purple-500/30",
          }}
          additionalInfo={t("contact.availableForRemote")}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">
          {t("contact.lookingForward")}
        </h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {t("contact.lookingForwardDescription")}
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;

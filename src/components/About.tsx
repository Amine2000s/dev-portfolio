import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import LeftSide from "./about/LeftSide";
import RightSide from "./about/RightSide";
import templateOneData from "../../templateOneData.json";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const data = templateOneData.About;
  const { t } = useLanguage();
  
  // Get translated tags and description
  const translatedTags = t("about.tags") as string[];
  const translatedDescription = t("about.description") as string;
  const leftControls = useAnimation();
  const [leftRef, leftInView] = useInView({ triggerOnce: false });
  const rightControls = useAnimation();
  const [rightRef, rightInView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (leftInView) {
      leftControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      leftControls.start({
        x: -100,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      rightControls.start({
        x: 100,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [rightInView, rightControls]);

  return (
    <section
      id="about"
      className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-28 py-16 sm:py-20 md:py-24 lg:py-32 relative"
    >
      <motion.div
        ref={leftRef}
        className="group relative w-fit h-fit p-1"
        initial={{ x: -100, opacity: 0 }}
        animate={leftControls}
      >
        <LeftSide imgURL={data.imgUrl} availability={data.availability} />
      </motion.div>

      <motion.div
        ref={rightRef}
        className="space-y-4 sm:space-y-6 max-w-xl w-full px-4 sm:px-0"
        initial={{ x: 100, opacity: 0 }}
        animate={rightControls}
      >
        <RightSide
          name={data.name}
          tags={translatedTags}
          description={{
            ...data.description,
            content: translatedDescription,
          }}
          resumeButton={data.resumeButton}
          links={data.links}
        />
      </motion.div>
    </section>
  );
};

export default About;

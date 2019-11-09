import posed from "react-pose";

export const Wrapper = posed.div({
  visible: { opacity: 1, transition: { duration: 400, ease: "linear" } },
  hidden: { opacity: 0.2 },
  popped: {
    x: -10,
    y: -10,
    opacity: 1,
    transition: { duration: 700 }
  }
});

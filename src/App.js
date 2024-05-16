import AnimaitonControls from "./components/AnimaitonControls";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import ScrollAnimation from "./components/ScrollAnimation";
import ViewBasedAnimations from "./components/ViewBasedAnimations";

// import { motion } from "framer-motion"
function App() {
  return (
    <>
      <BasicsOfMotion/>
      <Gestures/>
      <AnimaitonControls/>
      <ViewBasedAnimations/>
      <ScrollAnimation/>
    </>
  );
}

export default App;

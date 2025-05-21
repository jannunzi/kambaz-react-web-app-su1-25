import BackgroundColors from "./BackgroundColors";
import BootstrapForms from "./BootstrapForms";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapTables from "./BootstrapTables";
import Borders from "./Borders";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import "./index.css";
import Padding from "./Padding";
import Positions from "./Positions";
import SampleHomeScreenLayout from "./SampleHomeScreenLayout";
import ScreenSizeLabel from "./ScreenSizeLabel";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <SampleHomeScreenLayout />
      <ScreenSizeLabel />
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <BootstrapForms />
      <BootstrapTables />
      <BootstrapGrids />
      <Flex />
      <Float />
      {/* <Positions /> */}
      <Dimensions />
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
    </div>
  );
}

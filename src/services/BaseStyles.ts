import baseCss from "../../styles/base.css";
import baseDarkCss from "../../styles/base-dark.css";
import baseLightCss from "../../styles/base-light.css";
import windowCss from "../../styles/window.css";

export async function getBaseStructuralStyles() { return baseCss || ""; }
export async function getBaseDarkStyles()      { return baseDarkCss || ""; }
export async function getBaseLightStyles()     { return baseLightCss || ""; }
export async function getWindowStyles()        { return windowCss || ""; }

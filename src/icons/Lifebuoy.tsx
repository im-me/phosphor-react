/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="99.7"
      y1="99.7"
      x2="60.1"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="156.3"
      y1="99.7"
      x2="195.9"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="156.3"
      y1="156.3"
      x2="195.9"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="99.7"
      y1="156.3"
      x2="60.1"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M195.9,60.1a96,96,0,0,1,0,135.8l-39.6-39.6a40.1,40.1,0,0,0,0-56.6Z"
      opacity="0.2"
    />
    <path
      d="M60.1,195.9a96,96,0,0,1,0-135.8L99.7,99.7a40.1,40.1,0,0,0,0,56.6Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="99.7"
      y1="99.7"
      x2="60.1"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="156.3"
      y1="99.7"
      x2="195.9"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="156.3"
      y1="156.3"
      x2="195.9"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="99.7"
      y1="156.3"
      x2="60.1"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M202.2,200.8a103.8,103.8,0,0,0,0-145.6,2.3,2.3,0,0,0-.7-.7,2.3,2.3,0,0,0-.7-.7,103.8,103.8,0,0,0-145.6,0,2.3,2.3,0,0,0-.7.7,2.3,2.3,0,0,0-.7.7,103.8,103.8,0,0,0,0,145.6l.7.7a2.3,2.3,0,0,0,.7.7,103.8,103.8,0,0,0,145.6,0,2.3,2.3,0,0,0,.7-.7A2.3,2.3,0,0,0,202.2,200.8ZM96,128a32,32,0,1,1,32,32A32.1,32.1,0,0,1,96,128Zm88.3-67.6L155.8,88.9a47.9,47.9,0,0,0-55.6,0L71.7,60.4a87.9,87.9,0,0,1,112.6,0ZM71.7,195.6l28.5-28.5a47.9,47.9,0,0,0,55.6,0l28.5,28.5a87.9,87.9,0,0,1-112.6,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="99.7"
      y1="99.7"
      x2="60.1"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="156.3"
      y1="99.7"
      x2="195.9"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="156.3"
      y1="156.3"
      x2="195.9"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="99.7"
      y1="156.3"
      x2="60.1"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="99.7"
      y1="99.7"
      x2="60.1"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="156.3"
      y1="99.7"
      x2="195.9"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="156.3"
      y1="156.3"
      x2="195.9"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="99.7"
      y1="156.3"
      x2="60.1"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="99.7"
      y1="99.7"
      x2="60.1"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="156.3"
      y1="99.7"
      x2="195.9"
      y2="60.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="156.3"
      y1="156.3"
      x2="195.9"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="99.7"
      y1="156.3"
      x2="60.1"
      y2="195.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Lifebuoy = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Lifebuoy.displayName = "Lifebuoy";

export default Lifebuoy;

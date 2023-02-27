import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Expand = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_81_48)">
      <path
        d="M6.5 9.49867L0.5 15.4987"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5 4.99867V0.498672H11"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.5 10.9987V15.4987H5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5 0.498672L9.5 6.49867"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_81_48">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
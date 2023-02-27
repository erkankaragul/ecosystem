import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Support = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_702_3464)">
      <path
        d="M3 12H2.5C1.96957 12 1.46086 11.7893 1.08579 11.4142C0.710714 11.0391 0.5 10.5304 0.5 10V8C0.5 7.46957 0.710714 6.96086 1.08579 6.58579C1.46086 6.21071 1.96957 6 2.5 6H3C3.13261 6 3.25979 6.05268 3.35355 6.14645C3.44732 6.24022 3.5 6.36739 3.5 6.5V11.5C3.5 11.6326 3.44732 11.7598 3.35355 11.8536C3.25979 11.9473 3.13261 12 3 12Z"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5 12H13C12.8674 12 12.7402 11.9473 12.6464 11.8536C12.5527 11.7598 12.5 11.6326 12.5 11.5V6.5C12.5 6.36739 12.5527 6.24022 12.6464 6.14645C12.7402 6.05268 12.8674 6 13 6H13.5C14.0304 6 14.5391 6.21071 14.9142 6.58579C15.2893 6.96086 15.5 7.46957 15.5 8V10C15.5 10.5304 15.2893 11.0391 14.9142 11.4142C14.5391 11.7893 14.0304 12 13.5 12Z"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 6C2.5 4.54131 3.07946 3.14236 4.11091 2.11091C5.14236 1.07946 6.54131 0.5 8 0.5V0.5C9.45869 0.5 10.8576 1.07946 11.8891 2.11091C12.9205 3.14236 13.5 4.54131 13.5 6"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14.5H11.5C12.0304 14.5 12.5391 14.2893 12.9142 13.9142C13.2893 13.5391 13.5 13.0304 13.5 12.5V12"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 15.5H8C7.73478 15.5 7.48043 15.3946 7.29289 15.2071C7.10536 15.0196 7 14.7652 7 14.5C7 14.2348 7.10536 13.9804 7.29289 13.7929C7.48043 13.6054 7.73478 13.5 8 13.5H9C9.26522 13.5 9.51957 13.6054 9.70711 13.7929C9.89464 13.9804 10 14.2348 10 14.5C10 14.7652 9.89464 15.0196 9.70711 15.2071C9.51957 15.3946 9.26522 15.5 9 15.5Z"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_702_3464">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

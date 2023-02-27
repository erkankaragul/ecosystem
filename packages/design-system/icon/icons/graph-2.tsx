import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Graph2 = ({ color = "primary" }: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.25 12.75V6H16.5"
      stroke={buildColor(color)}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.25 6L15.311 13.939C15.1717 14.0784 15.0063 14.189 14.8242 14.2644C14.6422 14.3398 14.4471 14.3787 14.25 14.3787C14.0529 14.3787 13.8578 14.3398 13.6758 14.2644C13.4937 14.189 13.3283 14.0784 13.189 13.939L10.061 10.811C9.9217 10.6716 9.7563 10.561 9.57425 10.4856C9.3922 10.4102 9.19706 10.3713 9 10.3713C8.80294 10.3713 8.6078 10.4102 8.42575 10.4856C8.2437 10.561 8.0783 10.6716 7.939 10.811L0.75 18"
      stroke={buildColor(color)}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

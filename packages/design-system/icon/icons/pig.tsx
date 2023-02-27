import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Pig = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 6C15.5 6.53043 15.2893 7.03913 14.9142 7.4142C14.5391 7.78927 14.0304 8 13.5 8"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.6665 5H8.6665"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.20898 7.49667C4.07091 7.49667 3.95898 7.38474 3.95898 7.24667C3.95898 7.10861 4.07091 6.99667 4.20898 6.99667"
      stroke={buildColor(color)}
    />
    <path
      d="M4.20898 7.49667C4.34706 7.49667 4.45898 7.38474 4.45898 7.24667C4.45898 7.10861 4.34706 6.99667 4.20898 6.99667"
      stroke={buildColor(color)}
    />
    <path
      d="M5.26667 2.92C4.48667 1.50667 2.5 1.5 2.5 1.5L2.92 4.42C2.37017 5.01316 1.96415 5.72484 1.73333 6.5H0.5V10.5H2.16C2.50291 11.1046 2.95501 11.6403 3.49333 12.08V14C3.49506 14.1321 3.54829 14.2583 3.64169 14.3517C3.73509 14.4451 3.86126 14.4983 3.99333 14.5H5C5.13207 14.4983 5.25825 14.4451 5.35165 14.3517C5.44504 14.2583 5.49827 14.1321 5.5 14V13.1733C6.79847 13.6045 8.20153 13.6045 9.5 13.1733V14C9.50173 14.1321 9.55493 14.2583 9.64833 14.3517C9.74173 14.4451 9.86793 14.4983 10 14.5H11C11.1321 14.4983 11.2583 14.4451 11.3517 14.3517C11.4451 14.2583 11.4983 14.1321 11.5 14V12.0933C12.1171 11.603 12.6169 10.981 12.9629 10.2729C13.3089 9.56467 13.4924 8.78813 13.5 8C13.5 3.67333 8.8 1.74 5.26667 2.92Z"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

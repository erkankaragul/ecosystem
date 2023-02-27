import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const EditFill = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4651_6711)">
      <path
        d="M10.7933 2.34C10.7299 2.2785 10.645 2.24411 10.5567 2.24411C10.4683 2.24411 10.3834 2.2785 10.32 2.34L2.71335 9.94667C2.6821 9.97766 2.6573 10.0145 2.64038 10.0551C2.62346 10.0958 2.61475 10.1393 2.61475 10.1833C2.61475 10.2273 2.62346 10.2709 2.64038 10.3115C2.6573 10.3521 2.6821 10.389 2.71335 10.42L5.56668 13.2733C5.59661 13.3052 5.63275 13.3306 5.67288 13.348C5.71301 13.3654 5.75628 13.3743 5.80001 13.3743C5.84374 13.3743 5.88701 13.3654 5.92714 13.348C5.96727 13.3306 6.00342 13.3052 6.03335 13.2733L13.6467 5.66667C13.7082 5.60324 13.7426 5.51835 13.7426 5.43C13.7426 5.34165 13.7082 5.25677 13.6467 5.19334L10.7933 2.34Z"
        fill={buildColor(color)}
      />
      <path
        d="M1.99988 11.14C1.95904 11.1005 1.90897 11.0719 1.85424 11.0568C1.79951 11.0416 1.74185 11.0405 1.68654 11.0533C1.63051 11.0652 1.57869 11.0918 1.53647 11.1305C1.49426 11.1692 1.4632 11.2185 1.44654 11.2733L-0.000124747 15.5533C-0.0203338 15.6118 -0.0235441 15.6747 -0.00938264 15.7349C0.00477886 15.7951 0.0357306 15.85 0.0798753 15.8933C0.122221 15.9452 0.179214 15.9831 0.243428 16.0022C0.307642 16.0212 0.376098 16.0204 0.439875 16L4.71988 14.5733C4.77339 14.5544 4.82144 14.5226 4.8598 14.4808C4.89816 14.4389 4.92566 14.3883 4.93988 14.3333C4.95711 14.2746 4.95749 14.2122 4.94099 14.1533C4.92449 14.0943 4.89176 14.0412 4.84654 14L1.99988 11.14Z"
        fill={buildColor(color)}
      />
      <path
        d="M15.333 0.666665C14.8856 0.23488 14.2881 -0.00642395 13.6663 -0.00642395C13.0446 -0.00642395 12.4471 0.23488 11.9997 0.666665L11.5263 1.14C11.4951 1.17099 11.4703 1.20785 11.4534 1.24847C11.4364 1.28909 11.4277 1.33266 11.4277 1.37666C11.4277 1.42067 11.4364 1.46424 11.4534 1.50486C11.4703 1.54548 11.4951 1.58234 11.5263 1.61333L14.3797 4.46666C14.4428 4.5262 14.5262 4.55937 14.613 4.55937C14.6998 4.55937 14.7832 4.5262 14.8463 4.46666L15.333 4C15.5523 3.78138 15.7263 3.52162 15.845 3.23562C15.9638 2.94962 16.0249 2.643 16.0249 2.33333C16.0249 2.02367 15.9638 1.71705 15.845 1.43104C15.7263 1.14504 15.5523 0.885288 15.333 0.666665V0.666665Z"
        fill={buildColor(color)}
      />
    </g>
    <defs>
      <clipPath id="clip0_4651_6711">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

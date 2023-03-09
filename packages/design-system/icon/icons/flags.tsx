import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Flags = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8120_13526)">
      <path
        d="M11.8161 2.01801L6.95947 13.982"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4402 2.94467L16.2802 4.91C16.3239 4.9277 16.3617 4.95739 16.3893 4.99564C16.4168 5.03389 16.433 5.07915 16.4359 5.12619C16.4388 5.17323 16.4284 5.22015 16.4058 5.26152C16.3832 5.30289 16.3494 5.33703 16.3082 5.36001L14.6696 6.27867C14.4714 6.38961 14.3168 6.56473 14.2314 6.77521C14.146 6.98568 14.1347 7.21897 14.1996 7.43667L14.7329 9.24001C14.7462 9.28509 14.7466 9.33302 14.7339 9.37829C14.7212 9.42355 14.696 9.46433 14.6612 9.49593C14.6264 9.52754 14.5834 9.54868 14.5371 9.55695C14.4908 9.56522 14.4432 9.56027 14.3996 9.54267L9.55957 7.578"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.05615 2.01801L10.9128 13.982"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.43217 2.94467L1.59217 4.91C1.54849 4.9277 1.51069 4.95739 1.48315 4.99564C1.45561 5.03389 1.43944 5.07915 1.43652 5.12619C1.43359 5.17323 1.44402 5.22015 1.46661 5.26152C1.4892 5.30289 1.52302 5.33703 1.56417 5.36001L3.20284 6.27867C3.40105 6.38961 3.55559 6.56473 3.64102 6.77521C3.72644 6.98568 3.73767 7.21897 3.67284 7.43667L3.13951 9.24001C3.12619 9.28509 3.12585 9.33302 3.13853 9.37829C3.15121 9.42355 3.1764 9.46433 3.2112 9.49593C3.24601 9.52754 3.28902 9.54868 3.3353 9.55695C3.38158 9.56522 3.42925 9.56027 3.47284 9.54267L8.31351 7.578"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8120_13526">
        <rect
          width={size}
          height={size}
          fill="transparent"
          transform="translate(0.936035)"
        />
      </clipPath>
    </defs>
  </svg>
);

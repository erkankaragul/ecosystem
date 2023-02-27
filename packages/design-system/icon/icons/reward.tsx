import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Reward = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5466 12.8933L8.45325 9.89999C8.3152 9.82106 8.15893 9.77954 7.99991 9.77954C7.84089 9.77954 7.68463 9.82106 7.54658 9.89999L2.45325 12.8933C2.31944 12.9777 2.20823 13.0935 2.12923 13.2306C2.05024 13.3676 2.00585 13.5219 1.99991 13.68V15.0133C1.99434 15.1079 2.01506 15.2022 2.05977 15.2857C2.10448 15.3693 2.17145 15.4388 2.25325 15.4867C2.33335 15.5362 2.4257 15.5625 2.51991 15.5625C2.61412 15.5625 2.70647 15.5362 2.78658 15.4867L7.87991 12.4933C7.91776 12.4768 7.95861 12.4683 7.99991 12.4683C8.04121 12.4683 8.08206 12.4768 8.11991 12.4933L13.2132 15.4867C13.2932 15.5404 13.3869 15.5703 13.4832 15.5727C13.5796 15.5752 13.6746 15.5501 13.7572 15.5004C13.8398 15.4507 13.9065 15.3785 13.9495 15.2922C13.9925 15.2059 14.01 15.1092 13.9999 15.0133V13.68C13.9945 13.5218 13.9504 13.3673 13.8713 13.2301C13.7923 13.093 13.6808 12.9773 13.5466 12.8933V12.8933Z"
      fill={buildColor(color)}
    />
    <path
      d="M13.5466 8.22667L8.45325 5.23333C8.3152 5.1544 8.15893 5.11288 7.99991 5.11288C7.84089 5.11288 7.68463 5.1544 7.54658 5.23333L2.45325 8.22667C2.31944 8.31108 2.20823 8.42683 2.12923 8.5639C2.05024 8.70098 2.00585 8.85524 1.99991 9.01333V10.3467C1.99434 10.4413 2.01506 10.5355 2.05977 10.6191C2.10448 10.7026 2.17145 10.7722 2.25325 10.82C2.33335 10.8696 2.4257 10.8959 2.51991 10.8959C2.61412 10.8959 2.70647 10.8696 2.78658 10.82L7.87991 7.82667C7.91776 7.81015 7.95861 7.80162 7.99991 7.80162C8.04121 7.80162 8.08206 7.81015 8.11991 7.82667L13.2132 10.82C13.2932 10.8738 13.3869 10.9037 13.4832 10.9061C13.5796 10.9085 13.6746 10.8834 13.7572 10.8337C13.8398 10.784 13.9065 10.7118 13.9495 10.6255C13.9925 10.5393 14.01 10.4425 13.9999 10.3467V9.01333C13.9945 8.85511 13.9504 8.70063 13.8713 8.56346C13.7923 8.4263 13.6808 8.31064 13.5466 8.22667V8.22667Z"
      fill={buildColor(color)}
    />
    <path
      d="M13.5466 3.55999L8.45325 0.566661C8.3152 0.487731 8.15893 0.446213 7.99991 0.446213C7.84089 0.446213 7.68463 0.487731 7.54658 0.566661L2.45325 3.55999C2.31944 3.6444 2.20823 3.76016 2.12923 3.89723C2.05024 4.0343 2.00585 4.18857 1.99991 4.34666V5.67999C1.99434 5.77459 2.01506 5.86888 2.05977 5.95242C2.10448 6.03596 2.17145 6.1055 2.25325 6.15333C2.33335 6.20291 2.4257 6.22918 2.51991 6.22918C2.61412 6.22918 2.70647 6.20291 2.78658 6.15333L7.87991 3.15999C7.91776 3.14348 7.95861 3.13495 7.99991 3.13495C8.04121 3.13495 8.08206 3.14348 8.11991 3.15999L13.2132 6.13333C13.2918 6.18568 13.3834 6.21505 13.4778 6.21812C13.5721 6.22119 13.6654 6.19784 13.7472 6.15071C13.829 6.10358 13.896 6.03454 13.9406 5.95137C13.9853 5.8682 14.0058 5.77421 13.9999 5.67999V4.34666C13.9945 4.18844 13.9504 4.03396 13.8714 3.89679C13.7923 3.75963 13.6808 3.64397 13.5466 3.55999V3.55999Z"
      fill={buildColor(color)}
    />
  </svg>
);
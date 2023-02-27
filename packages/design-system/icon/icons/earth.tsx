import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Earth = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2169_4938)">
      <path
        d="M16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346629 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346629 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16H8.08C10.18 15.9982 12.1934 15.1632 13.6783 13.6783C15.1632 12.1934 15.9982 10.18 16 8.08V8ZM14.6667 8C14.6654 8.59255 14.5847 9.18225 14.4267 9.75334C14.415 9.79936 14.3935 9.84228 14.3635 9.87912C14.3336 9.91597 14.296 9.94584 14.2533 9.96667C14.1764 10.0103 14.0856 10.0223 14 10C13.5871 9.82223 13.235 9.52802 12.9867 9.15334L11.5067 6.93334C11.3542 6.70545 11.1479 6.51869 10.906 6.38961C10.6642 6.26053 10.3942 6.19311 10.12 6.19334H9.83334C9.34711 6.19334 8.88079 6.00018 8.53697 5.65637C8.19316 5.31255 8 4.84623 8 4.36C8 3.87377 8.19316 3.40746 8.53697 3.06364C8.88079 2.71982 9.34711 2.52667 9.83334 2.52667H11.68C11.7492 2.52522 11.8171 2.54628 11.8733 2.58667C12.7355 3.20215 13.4387 4.01424 13.9244 4.95564C14.4102 5.89704 14.6647 6.94066 14.6667 8ZM1.45334 6.77334C1.46609 6.69623 1.50606 6.62626 1.566 6.57611C1.62593 6.52596 1.70186 6.49896 1.78 6.5H4.66667C4.97169 6.49603 5.27443 6.55294 5.55718 6.66742C5.83993 6.78189 6.097 6.95162 6.31334 7.16667L7.06667 7.93334C7.48736 8.35424 7.73133 8.91997 7.74868 9.51481C7.76603 10.1096 7.55544 10.6886 7.16 11.1333L6.25334 12.1533C5.9821 12.4581 5.83259 12.852 5.83334 13.26V13.8133C5.83387 13.8692 5.82005 13.9243 5.7932 13.9733C5.76636 14.0224 5.72738 14.0637 5.68 14.0933C5.63144 14.1179 5.57777 14.1308 5.52334 14.1308C5.4689 14.1308 5.41523 14.1179 5.36667 14.0933C4.17416 13.5806 3.15727 12.7309 2.44079 11.6485C1.72432 10.5661 1.33942 9.29805 1.33334 8C1.33232 7.58814 1.37252 7.1772 1.45334 6.77334V6.77334Z"
        fill={buildColor(color)}
      />
    </g>
    <defs>
      <clipPath id="clip0_2169_4938">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

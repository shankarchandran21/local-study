import type { SVGProps } from "react";
const MenuClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="#fff"
    width="20px"
    height="20px"
    viewBox="0 0 16 16"
    cursor="pointer"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <polygon points="13.63 3.65 12.35 2.38 8 6.73 3.64 2.38 2.37 3.65 6.72 8.01 2.38 12.35 3.65 13.63 8 9.28 12.35 13.64 13.63 12.36 9.27 8.01 13.63 3.65" />
    </g>
  </svg>
);
export default MenuClose;

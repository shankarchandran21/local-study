import type { SVGProps } from "react";
const MenuOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffff"
    cursor="pointer"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"
    />
  </svg>
);
export default MenuOpen;
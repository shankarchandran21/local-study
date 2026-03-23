import type { RefObject } from "react";
import type React from "react";

interface ContentProps {
    title?:string;
    content?:string;
    ul?:string[];
    ol?:{title:string,listContent?:string|string[]}[];
    children?:Readonly<React.ReactNode>;
}

interface TabProps {
    active:number,
    handleActive:(val:number)=>void
   tabRef: RefObject<(HTMLButtonElement | null)[]>;
   sliderRef: RefObject<HTMLDivElement | null>;
}

export type {ContentProps,TabProps};
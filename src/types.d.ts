// This is a temporary hack to allow async components to be used in JSX
// Credit: HeyImMapleLeaf

import { ReactNode } from "react";
declare global {
  namespace JSX {
    type ElementType =
      | keyof JSX.IntrinsicElements
      | ((props: any) => Promise<ReactNode> | ReactNode);
  }
}

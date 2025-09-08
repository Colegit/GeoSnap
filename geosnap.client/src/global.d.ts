import "react";

declare global {
  type FC = React.FC<P>;
  type ReactNode = React.ReactNode;
  type JSXElement = JSX.Element; 
  type ReactElement = React.ReactElement
}
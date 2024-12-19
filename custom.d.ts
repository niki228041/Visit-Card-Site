declare module "*.jpg" {
    const value: string;
    export default value;
  }
  
  declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    import React from "react";
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    const value: string;
    export default value;
  }
  
  declare module "*.jpeg" {
    const value: string;
    export default value;
  }
  
  declare module "*.gif" {
    const value: string;
    export default value;
  }
  
  declare module "*.webp" {
    const value: string;
    export default value;
  }
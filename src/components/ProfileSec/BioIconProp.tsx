import { IconoirProvider } from "iconoir-react";
import { ReactNode } from "react";

const IconProp: React.FC< {children: ReactNode} > = ({ children }) => {
  return (
    <IconoirProvider
      iconProps={{
        color: "#FFFFFF",
        strokeWidth: 2,
        width: "1em",
        height: "1em",
      }}
    >
        { children }
    </IconoirProvider>
  );
};

export default IconProp;

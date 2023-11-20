import { IconoirProvider } from "iconoir-react";
import { ReactNode } from "react";

const StatusIconProp: React.FC< {children: ReactNode} > = ({ children }) => {
  return (
    <IconoirProvider
      iconProps={{
        color: "#111111",
        strokeWidth: 4,
        width: "0.8em",
        height: "0.8em",
      }}
    >
        { children }
    </IconoirProvider>
  );
};

export default StatusIconProp;

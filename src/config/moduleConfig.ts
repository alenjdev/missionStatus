import { ModuleConfig } from "../types/ModuleConfig";

export const moduleConfig: ModuleConfig = {
  debugItems: [
    {
      name: "GPS RTK status",
      state: "Fixed" || "Off ",
    },
    {
      name: "TRACK status",
      state: "On" || "Deviated",
    },
  ],
};

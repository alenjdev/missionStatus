import { FC, useState, useLayoutEffect } from "react";

import { ModuleData, App } from "@formant/data-sdk";
import { TableComponent } from "../TableComponent/index";

export const Table: FC = () => {
  const [rtk, setRtk] = useState();
  const [track, setTrack] = useState();

  const shouldClearData = (
    lastUpdate: number,
    scruttingTime: number,
    seconds: number
  ) => {
    return lastUpdate + seconds * 1000 < scruttingTime;
  };

  useLayoutEffect(() => {
    App.addModuleDataListener(receiveModuleData);
  }, []);

  const receiveModuleData = async (newValue: ModuleData) => {
    const streams = newValue.streams;
    if (Object.keys(streams).length === 0) {
      throw new Error("No streams.");
    }
    Object.keys(streams).forEach((stream) => {
      const latestState = getLatestData(streams, stream);
      if (typeof latestState[1] !== "string" && latestState[1] !== undefined) {
        if (streams[stream].data[0].name === "rtk.status") {
          if (shouldClearData(latestState[0], newValue.time, 10)) {
            setRtk(undefined);
            return;
          }
          setRtk(latestState[1].values[0]);
        }
        if (streams[stream].data[0].name === "track.status") {
          if (shouldClearData(latestState[0], newValue.time, 10)) {
            setTrack(undefined);
            return;
          }
          setTrack(latestState[1].values[0]);
        }
      }
    });
  };

  return (
    <TableComponent
      topicStats={{
        rtkStatus: rtk,
        trackStatus: track,
      }}
      tableHeaders={["Item", "Status"]}
    />
  );
};

const getLatestData = (
  moduleData: any,
  stream: string
): any | string | undefined => {
  if (moduleData[stream] === undefined) {
    return "No stream.";
  }
  if (moduleData[stream].loading) {
    return undefined;
  }
  if (moduleData[stream].tooMuchData) {
    return "Too much data.";
  }

  if (moduleData[stream].data.length === 0) {
    return "No data.";
  }
  const latestPoint = moduleData[stream].data[0].points.at(-1);
  if (!latestPoint) {
    return "No datapoints.";
  }
  return latestPoint;
};

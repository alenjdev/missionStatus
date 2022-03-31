import { FC, useState, useLayoutEffect } from "react";

import { ModuleData, App } from "@formant/data-sdk";
import { TableComponent } from "../TableComponent/index";

export const Table: FC = () => {
  const [rtk, setRtk] = useState();
  const [track, setTrack] = useState();

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
      if (typeof latestState !== "string" && latestState !== undefined) {
        if (streams[stream].data[0].name === "rtk.status") {
          setRtk(latestState.values[0]);
        }
        if (streams[stream].data[0].name === "track.status") {
          setTrack(latestState.values[0]);
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
  moduleData: {
    [stream_name: string]: Stream;
  },
  stream: string
): string | undefined => {
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
  return latestPoint[1];
};

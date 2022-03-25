import { RosDebugState } from "../types/RosTopicStats";

export const getContent = (
  _: string,
  topicStats: RosDebugState
): (string | number)[] => {
  if (_ === "GPS RTK status" && topicStats?.rtkStatus === undefined)
    return ["-", "unknown"];
  if (_ === "GPS RTK status" && topicStats?.rtkStatus === true)
    return ["Fixed", "good"];
  if (_ === "GPS RTK status" && topicStats?.rtkStatus === false)
    return ["Disable", "bad"];

  if (_ === "TRACK status" && topicStats?.trackStatus === undefined)
    return ["-", "unknown"];
  if (_ === "TRACK status" && topicStats?.trackStatus === true)
    return ["On", "good"];
  if (_ === "TRACK status" && topicStats?.trackStatus === false)
    return ["Off", "bad"];

  return ["-", "unknown"];
};

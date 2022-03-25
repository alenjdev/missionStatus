export interface RosTopicStats {
  name: string;
  state: string | number;
}

export interface RosDebug {
  debug_stats: RosTopicStats[];
}

export interface RosDebugState {
  rtkStatus: boolean | undefined;
  trackStatus: boolean | undefined;
}

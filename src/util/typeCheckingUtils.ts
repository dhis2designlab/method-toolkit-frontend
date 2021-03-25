import { technique, activity } from "../components/types";

export function isTechnique(resource: activity | technique): resource is technique {
    return (resource as technique).difficulty !== undefined;
};

export function isActivity(resource: activity | technique): resource is activity {
    return (resource as activity).activities !== undefined;
};
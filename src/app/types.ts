export interface AppType {
  name: string;
  address: string;
}

export interface CourseDataType {
  name: string;
  info: string[];
  link?: string;
}

export interface WorkDataType {
  place: string;
  job: string;
  location: string;
  startTime: string;
  endTime: string;
  info: string[];
}

export interface ProjectDataType {
  name: string;
  description: string;
  link: string;
}

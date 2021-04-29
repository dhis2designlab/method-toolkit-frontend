export interface example {
  _id: string;
  id: string;
  example: Array<string>;
  title: string;
  intro: string;
  content: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface technique {
  id: string;
  _id: string;
  slug: string;
  title: string;
  intro: string;
  content: string;
  difficulty: string;
  activity: string;
  time_in_minutes: boolean;
  phase: string;
  materials: string;
  maximum_time: number;
  minimum_time: number;
  createdAt: Date;
  updatedAt: Date;
  published_at: Date;
  examples?: Array<example>;
  pairs_well_with?: Array<technique>;
  __v: number;
}

export interface activity {
  id: string;
  _id: string;
  title: string;
  intro: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  published_at: Date;
  activity: string;
  techniques?: Array<technique>;
  examples?: Array<example>;
  activities?: Array<activity>;
  __v: number;
}

export interface resourceFilters {
  showActivities: boolean;
  showTechniques: boolean;
}

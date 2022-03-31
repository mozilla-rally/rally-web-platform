import type { Browser } from "./Browser";

export interface Study {
  name: string;
  description: string;
  studyId?: string;
  tags: string[];
  icons: Record<string, string>;
  browser: Browser;
  order?: number;
  addonId?: string;
  authors: {
    name: string;
    url?: string;
  };
  endDate: string;
  version: string;
  studyEnded: boolean;
  studyPaused: boolean;
  downloadLink: string;
  schemaNamespace?: string;
  studyDetailsLink: string;
  minimumCoreVersion?: string;
  dataCollectionDetails: string[];
}

// ============================================================
// Arabic translation shapes
// Each translation overrides only the text fields of the English record;
// slugs, images, icons and flags always come from the English data.
// ============================================================

import type { ServiceType } from '../serviceTypes';
import type { ServiceArea } from '../serviceAreas';

export type ServiceTranslation = Pick<
  ServiceType,
  | 'name'
  | 'shortName'
  | 'description'
  | 'shortDescription'
  | 'detailedDescription'
  | 'benefits'
  | 'industriesServed'
  | 'equipmentUsed'
  | 'standardsCompliance'
  | 'keyStats'
  | 'projectExamples'
  | 'areaSpecificContent'
  | 'processSteps'
>;

export type AreaTranslation = Pick<
  ServiceArea,
  | 'name'
  | 'county'
  | 'description'
  | 'detailedDescription'
  | 'localLandmarks'
  | 'buildingTypes'
  | 'climateNotes'
  | 'keyStats'
  | 'responseTime'
>;

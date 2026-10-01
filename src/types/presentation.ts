export interface SlideInfo {
  id: number;
  title: string;
  shortTitle: string;
  category: string;
  durationSeconds: number; // e.g., 35-45s
  speakerNotes: {
    keyMessage: string;
    pitchScript: string[];
    judgeAnticipatedQuestions: string[];
  };
}

export interface FactorInfluence {
  id: string;
  name: string;
  category: 'historical' | 'soil' | 'weather' | 'cultivation';
  impactPercentage: number;
  direction: 'positive' | 'negative' | 'moderate';
  description: string;
}

export interface DemoCropForecast {
  crop: string;
  areaHa: number;
  expectedYield: string;
  expectedProduction: string;
  confidence: number;
  risk: 'Low' | 'Medium' | 'High';
  riskDetails: string;
  soilCondition: string;
  weatherSummary: string;
  cultivationNote: string;
}

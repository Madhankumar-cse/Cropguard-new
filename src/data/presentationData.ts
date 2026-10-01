import { SlideInfo, FactorInfluence, DemoCropForecast } from '../types/presentation';

// Generated imagery references
export const SLIDE_IMAGES = {
  hero: '/src/assets/images/hero_agriculture_tech_1790834457029.jpg',
  challenge: '/src/assets/images/farmer_field_inspection_1790834471243.jpg',
  vision: '/src/assets/images/sustainable_food_harvest_1790834486117.jpg',
};

export const PROJECT_METADATA = {
  name: 'CropGuard AI Pro',
  teamId: 'TEAM ID: TSS002',
  problemCode: 'SSA025',
  problemDomain: 'SMART AGRICULTURE',
  problemStatement: 'Build a crop-yield forecasting system that estimates expected yield from historical crop, soil, weather and cultivation information and identifies the factors influencing the prediction.',
  primaryInnovation: 'AI-POWERED CROP YIELD FORECASTING',
  tagline: 'Predict Yield. Understand Risk. Farm Smarter.',
};

export const SLIDES: SlideInfo[] = [
  {
    id: 1,
    title: 'Powerful Opening',
    shortTitle: 'Overview',
    category: 'Title & Positioning',
    durationSeconds: 30,
    speakerNotes: {
      keyMessage: 'CropGuard AI Pro addresses SSA025 by delivering AI-powered crop yield forecasting before harvest.',
      pitchScript: [
        'Respected judges, we are Team TSS002 presenting CropGuard AI Pro under Problem Statement SSA025 in Smart Agriculture.',
        'Our core mission is simple yet vital: empower farmers and agricultural stakeholders with accurate, explainable crop yield forecasts before harvest.',
        'Predict Yield. Understand Risk. Farm Smarter.'
      ],
      judgeAnticipatedQuestions: [
        'Why focus on yield forecasting over disease detection? Because pre-harvest yield drives crop planning, credit, storage, and market commitments before losses occur.'
      ]
    }
  },
  {
    id: 2,
    title: 'The Challenge: Farming Under Uncertainty',
    shortTitle: 'The Challenge',
    category: 'Problem Context',
    durationSeconds: 40,
    speakerNotes: {
      keyMessage: 'Disjointed farm data creates critical production uncertainty for growers.',
      pitchScript: [
        'Farming today operates under severe uncertainty. Crucial data exists across four fragmented silos: historical yields, soil chemistry, dynamic weather, and cultivation practices.',
        'Because these factors interact non-linearly, estimating expected yield before harvest is extraordinarily difficult.',
        'Without foresight, production planning falters, leading to input misallocation, financial vulnerability, and supply chain shocks.'
      ],
      judgeAnticipatedQuestions: [
        'What makes current farm forecasting methods insufficient? Most rely on static averages or single-variable heuristics that ignore complex microclimate and soil interactions.'
      ]
    }
  },
  {
    id: 3,
    title: 'CropGuard AI Pro — Turning Farm Data into Forecasts',
    shortTitle: 'The Solution',
    category: 'Core Architecture',
    durationSeconds: 45,
    speakerNotes: {
      keyMessage: 'An integrated multi-modal AI engine transforming 4 data streams into explainable forecasts and decision support.',
      pitchScript: [
        'CropGuard AI Pro bridges this gap. Our multi-input architecture ingests historical data, soil parameters, weather streams, and cultivation practices.',
        'Our AI Yield Forecasting Engine computes expected yield, production tonnage, prediction confidence, and risk profile.',
        'This directly drives 4 core capabilities: Yield Forecast, Factor Analysis, Risk Insights, and Farmer Decision Support.'
      ],
      judgeAnticipatedQuestions: [
        'How is this architecture validated? It isolates feature weights through explainable ML, ensuring agronomists and farmers see why a forecast was generated.'
      ]
    }
  },
  {
    id: 4,
    title: 'From Farm Inputs to an Explainable Forecast',
    shortTitle: 'How It Works',
    category: 'Workflow & Demo',
    durationSeconds: 45,
    speakerNotes: {
      keyMessage: 'A transparent 5-step pipeline generating explainable forecast outputs.',
      pitchScript: [
        'Here is the complete operational pipeline from farm inputs to actionable insight.',
        'Step 1 captures Farm Data; Step 2 analyzes Soil NPK and pH; Step 3 incorporates Weather and Cultivation.',
        'Step 4 runs the AI Forecast, delivering an explainable result with quantified confidence and risk.',
        'In our illustrative demo for Rice on 2.5 hectares: Expected Yield is 4.8 t/ha (12.0 tons total), 87% confidence, Medium risk profile.'
      ],
      judgeAnticipatedQuestions: [
        'Is the demo output real-world measured data? As highlighted, this is illustrative demo output demonstrating pipeline capabilities.'
      ]
    }
  },
  {
    id: 5,
    title: 'More Than a Number — Understand the Forecast',
    shortTitle: 'Intelligence & Impact',
    category: 'Explainability & Extension',
    durationSeconds: 40,
    speakerNotes: {
      keyMessage: 'Explainable factor attribution builds farmer trust; complementary market and weather tools amplify value.',
      pitchScript: [
        'A forecast is only valuable if farmers trust and understand it. CropGuard AI Pro shows the exact factors influencing the prediction.',
        'Looking at our historical progression from 3.9 t/ha in 2023 to our 2026 forecast of 4.8 t/ha, we decompose the impact of soil nutrients, rainfall timing, and irrigation.',
        'Furthermore, supporting modules provide Market Demand, Price Trends, Crop Comparison, and Weather Insights — keeping yield forecasting front and center.'
      ],
      judgeAnticipatedQuestions: [
        'How does factor analysis help farmers improve their yield? By pinpointing limiting factors like nitrogen deficiency or delayed rainfall, farmers can intervene in-season.'
      ]
    }
  },
  {
    id: 6,
    title: 'Towards Smarter and More Resilient Agriculture',
    shortTitle: 'Vision & Closing',
    category: 'Impact & SDG 2',
    durationSeconds: 40,
    speakerNotes: {
      keyMessage: 'Aligning precision forecasting with UN SDG 2 Zero Hunger and resilient agricultural food systems.',
      pitchScript: [
        'Our broader vision directly aligns with UN Sustainable Development Goal 2: Zero Hunger.',
        'By anchoring agriculture in Data-Driven Farming, Informed Decisions, Sustainable Production, and Resilient Food Systems, we turn agricultural risk into predictable resilience.',
        'CropGuard AI Pro: Predict Yield. Understand Risk. Farm Smarter. Thank you.'
      ],
      judgeAnticipatedQuestions: [
        'What is your deployment roadmap? Piloting with farmer producer organizations (FPOs) and agricultural extension centers across target agro-climatic zones.'
      ]
    }
  }
];

export const DEMO_FORECASTS: DemoCropForecast[] = [
  {
    crop: 'Rice (Paddy)',
    areaHa: 2.5,
    expectedYield: '4.8 t/ha',
    expectedProduction: '12.0 tons',
    confidence: 87,
    risk: 'Medium',
    riskDetails: 'Late-season monsoon precipitation deficit buffer needed',
    soilCondition: 'Alluvial Loam, pH 6.4, High N (280 kg/ha), Medium P/K',
    weatherSummary: 'Rainfall 1,120mm, Mean Temp 28.5°C, Rel. Humidity 78%',
    cultivationNote: 'System of Rice Intensification (SRI), Controlled Flooding'
  },
  {
    crop: 'Wheat (Winter)',
    areaHa: 3.0,
    expectedYield: '3.6 t/ha',
    expectedProduction: '10.8 tons',
    confidence: 91,
    risk: 'Low',
    riskDetails: 'Optimal moisture retention; minimal heat stress detected',
    soilCondition: 'Clay Loam, pH 7.2, Balanced NPK ratio 4:2:1',
    weatherSummary: 'Winter Rainfall 180mm, Mean Temp 17.2°C, Cool Nights',
    cultivationNote: 'Zero-tillage drill seeding, 4-stage sprinkler irrigation'
  },
  {
    crop: 'Maize (Kharif)',
    areaHa: 2.0,
    expectedYield: '5.2 t/ha',
    expectedProduction: '10.4 tons',
    confidence: 84,
    risk: 'Medium',
    riskDetails: 'Moderate vegetative dry-spell vulnerability in Week 5',
    soilCondition: 'Sandy Loam, pH 6.8, Organic Carbon 0.65%',
    weatherSummary: 'Rainfall 740mm, Mean Temp 30.1°C, Sunshine 7.2 hrs/day',
    cultivationNote: 'Ridge & furrow planting, Targeted drip fertigation'
  }
];

export const INFLUENCING_FACTORS: FactorInfluence[] = [
  {
    id: 'f1',
    name: 'Previous Yield & Baseline Trend',
    category: 'historical',
    impactPercentage: 24,
    direction: 'positive',
    description: '3-year field historical baseline shows consistent 4.2–4.5 t/ha productivity trajectory'
  },
  {
    id: 'f2',
    name: 'Soil Condition (NPK & pH)',
    category: 'soil',
    impactPercentage: 22,
    direction: 'positive',
    description: 'Favorable organic carbon (0.72%) and active nitrogen mineralization in topsoil'
  },
  {
    id: 'f3',
    name: 'Rainfall Timing & Volume',
    category: 'weather',
    impactPercentage: 20,
    direction: 'moderate',
    description: 'Adequate vegetative stage rainfall; slight variance during grain filling window'
  },
  {
    id: 'f4',
    name: 'Temperature & Growing Degree Days',
    category: 'weather',
    impactPercentage: 14,
    direction: 'positive',
    description: 'Optimal diurnal temperature range (22°C night / 31°C day) favoring panicle development'
  },
  {
    id: 'f5',
    name: 'Irrigation Scheduling & Water Table',
    category: 'cultivation',
    impactPercentage: 12,
    direction: 'positive',
    description: 'Supplementary tube-well scheduling dampens dry-spell vulnerability'
  },
  {
    id: 'f6',
    name: 'Cultivation Practices & Input Timing',
    category: 'cultivation',
    impactPercentage: 8,
    direction: 'positive',
    description: 'Certified seed variety selection and split urea top-dressing regimen'
  }
];

export const HISTORICAL_CHART_DATA = [
  { year: '2023', yield: 3.9, type: 'Historical Actual', note: 'Normal Monsoon' },
  { year: '2024', yield: 4.2, type: 'Historical Actual', note: 'Input Optimization' },
  { year: '2025', yield: 4.5, type: 'Historical Actual', note: 'Precision Cultivation' },
  { year: '2026', yield: 4.8, type: 'AI Forecast', note: 'Projected with 87% Confidence' }
];

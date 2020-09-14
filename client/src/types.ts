export interface serviceEstimate {
  serviceName: string
  wattHours: number
  co2e: number
  cost: number
  region: string
}

export interface ServiceResult {
  data: EstimationResult[]
  loading: boolean
  error: boolean
}

export interface EstimationResult {
  timestamp: Date
  serviceEstimates: serviceEstimate[]
}

export interface co2PerDay {
  x: Date
  y: number
}
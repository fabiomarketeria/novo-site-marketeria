export interface LeadData {
  name: string
  email: string
  company: string
  phone?: string
  message?: string
  source?: string
}

export interface MarketingIntegration {
  name: string
  type: 'crm' | 'email' | 'analytics' | 'automation'
  enabled: boolean
  apiKey?: string
  webhook?: string
}

export interface ConversionEvent {
  eventType: string
  timestamp: Date
  userId?: string
  data: Record<string, any>
}
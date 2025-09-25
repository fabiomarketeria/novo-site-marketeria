import { NextRequest, NextResponse } from 'next/server'
import { LeadData } from '@/types/marketing'
import { LeadQualification, MarketingIntegrations } from '@/lib/marketing'

export async function POST(request: NextRequest) {
  try {
    const leadData: LeadData = await request.json()
    
    // Basic validation
    if (!leadData.name || !leadData.email || !leadData.company) {
      return NextResponse.json(
        { error: 'Nome, email e empresa são obrigatórios' },
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(leadData.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }
    
    // Lead qualification
    const qualification = LeadQualification.qualifyLead(leadData)
    
    // Add metadata
    const enrichedLead = {
      ...leadData,
      qualification,
      source: 'website',
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    }
    
    // Send to CRM (in production, this would be actual CRM integration)
    const crmSuccess = await MarketingIntegrations.sendToCRM(enrichedLead)
    
    // Add to email marketing list
    const emailSuccess = await MarketingIntegrations.addToEmailList(
      leadData.email, 
      ['website-lead', qualification]
    )
    
    // Track conversion
    MarketingIntegrations.trackConversion({
      eventType: 'lead_submitted',
      timestamp: new Date(),
      data: { qualification, source: 'website' }
    })
    
    // In a real application, you would save this to a database
    console.log('New lead:', enrichedLead)
    
    return NextResponse.json({
      success: true,
      message: 'Lead recebido com sucesso!',
      qualification
    })
    
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
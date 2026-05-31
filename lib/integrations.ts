export type Integration = {
  name: string
  category: 'Field Service' | 'Automation'
  logo: string
}

export const integrations: Integration[] = [
  { name: 'JobNimbus', category: 'Field Service', logo: '/integrations/jobnimbus.png' },
  { name: 'Housecall Pro', category: 'Field Service', logo: '/integrations/housecall-pro.png' },
  { name: 'AccuLynx', category: 'Field Service', logo: '/integrations/acculynx.png' },
  { name: 'Jobber', category: 'Field Service', logo: '/integrations/jobber.png' },
  { name: 'Leap', category: 'Field Service', logo: '/integrations/leap.png' },
  { name: 'FieldPulse', category: 'Field Service', logo: '/integrations/fieldpulse.png' },
  { name: 'Dataforma', category: 'Field Service', logo: '/integrations/dataforma.png' },
  { name: 'SalesRabbit', category: 'Field Service', logo: '/integrations/salesrabbit.png' },
  { name: 'Service Bridge', category: 'Field Service', logo: '/integrations/service-bridge.png' },
  { name: 'Service Fusion', category: 'Field Service', logo: '/integrations/service-fusion.png' },
  { name: 'Improveit360', category: 'Field Service', logo: '/integrations/improveit360.png' },
  { name: 'JobTread', category: 'Field Service', logo: '/integrations/jobtread.png' },
  { name: 'HubSpot', category: 'Automation', logo: '/integrations/hubspot.svg' },
  { name: 'GHL', category: 'Automation', logo: '/integrations/ghl.jpg' },
]

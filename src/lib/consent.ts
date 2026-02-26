export interface ConsentPreferences {
  essential: boolean;
  performance: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentRecord {
  preferences: ConsentPreferences;
  timestamp: string;
  policyVersion: string;
  source: 'banner' | 'preferences';
}

const CONSENT_KEY = 'neocept_cookie_consent';
const POLICY_VERSION = '1.0';

export function getConsentRecord(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    
    const record = JSON.parse(stored) as ConsentRecord;
    return record;
  } catch {
    return null;
  }
}

export function setConsentRecord(
  preferences: ConsentPreferences,
  source: 'banner' | 'preferences'
): void {
  if (typeof window === 'undefined') return;
  
  const record: ConsentRecord = {
    preferences,
    timestamp: new Date().toISOString(),
    policyVersion: POLICY_VERSION,
    source,
  };
  
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
}

export function hasConsent(): boolean {
  return getConsentRecord() !== null;
}

export function getPreferences(): ConsentPreferences {
  const record = getConsentRecord();
  if (!record) {
    return {
      essential: true,
      performance: false,
      analytics: false,
      marketing: false,
    };
  }
  return record.preferences;
}

export function acceptAll(): void {
  setConsentRecord(
    {
      essential: true,
      performance: true,
      analytics: true,
      marketing: true,
    },
    'banner'
  );
}

export function rejectNonEssential(): void {
  setConsentRecord(
    {
      essential: true,
      performance: false,
      analytics: false,
      marketing: false,
    },
    'banner'
  );
}

export function canLoadScript(category: keyof ConsentPreferences): boolean {
  if (category === 'essential') return true;
  const preferences = getPreferences();
  return preferences[category];
}

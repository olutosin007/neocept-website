import { useState, useEffect, useCallback } from 'react';
import {
  ConsentPreferences,
  getConsentRecord,
  setConsentRecord,
  hasConsent,
  getPreferences,
  acceptAll as acceptAllConsent,
  rejectNonEssential as rejectNonEssentialConsent,
} from '../lib/consent';

export function useConsent() {
  const [hasUserConsent, setHasUserConsent] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    performance: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setHasUserConsent(hasConsent());
    setPreferences(getPreferences());
  }, []);

  const acceptAll = useCallback(() => {
    acceptAllConsent();
    setHasUserConsent(true);
    setPreferences({
      essential: true,
      performance: true,
      analytics: true,
      marketing: true,
    });
  }, []);

  const rejectNonEssential = useCallback(() => {
    rejectNonEssentialConsent();
    setHasUserConsent(true);
    setPreferences({
      essential: true,
      performance: false,
      analytics: false,
      marketing: false,
    });
  }, []);

  const savePreferences = useCallback((newPreferences: ConsentPreferences) => {
    const prefs = { ...newPreferences, essential: true };
    setConsentRecord(prefs, 'preferences');
    setHasUserConsent(true);
    setPreferences(prefs);
  }, []);

  const updatePreference = useCallback(
    (category: keyof ConsentPreferences, value: boolean) => {
      if (category === 'essential') return;
      setPreferences((prev) => ({ ...prev, [category]: value }));
    },
    []
  );

  return {
    hasUserConsent,
    preferences,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    updatePreference,
  };
}

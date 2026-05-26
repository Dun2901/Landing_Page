export type TrackingEventName =
  | 'click_call'
  | 'click_zalo'
  | 'click_hero_booking'
  | 'click_price_booking'
  | 'click_section_booking'
  | 'submit_booking_success';

type TrackingParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (type: 'event', eventName: string, params?: TrackingParams) => void;
    dataLayer?: TrackingParams[];
  }
}

export const trackEvent = (eventName: TrackingEventName, params: TrackingParams = {}) => {
  const payload = {
    route: 'sai-gon-vung-tau',
    ...params,
  };

  console.log('Tracking event:', eventName, payload);

  window.gtag?.('event', eventName, payload);
  window.dataLayer?.push({ event: eventName, ...payload });
};

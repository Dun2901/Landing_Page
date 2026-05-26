import { ROUTE_KEYWORDS, SITE_SEO } from '@/constants/seo.constant';

const upsertMeta = (
  selector: string,
  attrName: 'name' | 'property',
  attrValue: string,
  content: string,
) => {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }

  meta.content = content;
};

const upsertLink = (rel: string, href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
};

const upsertJsonLd = (id: string, data: unknown) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

export const applyHomeSeo = () => {
  const siteUrl = window.location.origin;
  const canonicalUrl = `${siteUrl}${SITE_SEO.canonicalPath}`;

  document.title = SITE_SEO.title;

  upsertMeta('meta[name="description"]', 'name', 'description', SITE_SEO.description);
  upsertMeta('meta[name="keywords"]', 'name', 'keywords', ROUTE_KEYWORDS.join(', '));

  upsertMeta('meta[property="og:title"]', 'property', 'og:title', SITE_SEO.title);
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', SITE_SEO.description);
  upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
  upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

  upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

  upsertLink('canonical', canonicalUrl);

  upsertJsonLd('local-business-schema-json-ld', {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Xe tiện chuyến Sài Gòn Vũng Tàu',
    description: SITE_SEO.description,
    url: canonicalUrl,
    telephone: SITE_SEO.hotline,
    priceRange: '700.000đ - 4.000.000đ',
    areaServed: [
      { '@type': 'City', name: 'TP. Hồ Chí Minh' },
      { '@type': 'City', name: 'Vũng Tàu' },
      { '@type': 'Place', name: 'Sân bay Tân Sơn Nhất' },
      { '@type': 'Place', name: 'Bệnh viện Chợ Rẫy' },
      { '@type': 'Place', name: 'Bệnh viện Từ Dũ' },
    ],
    serviceType: ['Bao xe riêng', 'Xe tiện chuyến hợp đồng trọn gói'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1321',
    },
  });
};

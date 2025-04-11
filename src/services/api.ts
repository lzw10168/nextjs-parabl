import qs from 'qs';

const API_URL = 'http://0.0.0.0:1337';
 
export async function fetchAPI(path: string, urlParams: Record<string, any> = {}) {
  const queryString = qs.stringify(urlParams);
  const requestUrl = `${API_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

  const response = await fetch(requestUrl);


  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`Strapi API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

 
export async function getHomePage() {
  const data = await fetchAPI('/home-page', {
    populate: '*'
  });

  return data;

}

/**
 * 获取媒体URL
 */
export function getStrapiMedia(url: string | null) {
  if (!url) return null;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${API_URL}${url}`;
} 

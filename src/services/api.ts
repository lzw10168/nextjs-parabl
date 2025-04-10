import qs from 'qs';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://0.0.0.0:1337';
console.log('API_URL: ', API_URL);

/**
 * 从Strapi获取数据的通用函数
 */
export async function fetchAPI(path: string, urlParams: Record<string, any> = {}) {
  // 合并查询参数
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

/**
 * 获取首页数据
 */
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

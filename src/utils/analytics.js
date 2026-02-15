const STORAGE_KEY = 'portfolio-analytics-v1';
const USER_COOKIE = 'portfolio_uid';

const getCookieValue = (name) => {
  const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[2]) : null;
};

const setCookieValue = (name, value, maxAgeSeconds) => {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}`;
};

export const getOrCreateUserId = () => {
  const existing = getCookieValue(USER_COOKIE);
  if (existing) return existing;

  const newId = `uid_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  setCookieValue(USER_COOKIE, newId, 60 * 60 * 24 * 365);
  return newId;
};

const loadStats = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { clicks: {}, unique: {} };
    }
    const parsed = JSON.parse(raw);
    return {
      clicks: parsed.clicks || {},
      unique: parsed.unique || {}
    };
  } catch (error) {
    return { clicks: {}, unique: {} };
  }
};

const saveStats = (stats) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export const recordButtonClick = (buttonId) => {
  const userId = getOrCreateUserId();
  const stats = loadStats();

  stats.clicks[buttonId] = (stats.clicks[buttonId] || 0) + 1;
  if (!stats.unique[buttonId]) {
    stats.unique[buttonId] = {};
  }
  stats.unique[buttonId][userId] = true;

  saveStats(stats);
};

export const getButtonStats = () => {
  const stats = loadStats();
  return Object.keys(stats.clicks).map((buttonId) => {
    const uniqueMap = stats.unique[buttonId] || {};
    return {
      id: buttonId,
      totalClicks: stats.clicks[buttonId],
      uniqueUsers: Object.keys(uniqueMap).length
    };
  });
};

export const SOCIAL_LINKS = {
  resume: { label: 'Resume', url: '/resume.pdf' },
  linkedin: { label: 'LinkedIn', url: 'your-linkedin-link' },
  github: { label: 'GitHub', url: 'https://github.com/Ishankp' }
};

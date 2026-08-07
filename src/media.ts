/** College intro video on Cloudinary — stable MP4 URL (no f_auto; works in all browsers on Vercel). */
const DEFAULT_INTRO_VIDEO =
  'https://res.cloudinary.com/dxoigpt5j/video/upload/v1778825588/gsscp_video_sexly6.mp4';

const envUrl = import.meta.env.VITE_INTRO_VIDEO_URL?.trim();

export const INTRO_VIDEO_URL = envUrl || DEFAULT_INTRO_VIDEO;

import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  route('/impressum', 'routes/impressum.tsx'),
  route('/datenschutz', 'routes/datenschutz.tsx'),

  route(
    '/.well-known/appspecific/com.chrome.devtools.json',
    'routes/fix-chrome-devtools.tsx',
  ),
] satisfies RouteConfig;

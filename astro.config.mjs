import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://bodynation-website.vercel.app',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
```

Commit changes. Then go to:
```
https://github.com/owais-dotcom/bodynation-website/edit/main/package.json
```

Remove this line from the `dependencies` section:
```
"@astrojs/vercel": "...",

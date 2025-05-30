'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <Giscus
      repo="rlaehdehd7/rlaehdehd7-blog-giscus"
      repoId="R_kgDOOzBsqQ"
      category="Announcements"
      categoryId="DIC_kwDOOzBsqc4CqyPr"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'dark' : 'light'}
      loading="lazy"
      lang="ko"
    />
  );
}

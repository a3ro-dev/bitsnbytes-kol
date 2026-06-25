'use client';

import { useEffect } from 'react';

export default function CoC() {
  useEffect(() => {
    window.location.href = 'https://gobitsnbytes.org/coc';
  }, []);

  return null;
}

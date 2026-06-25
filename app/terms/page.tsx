'use client';

import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.location.href = 'https://gobitsnbytes.org/terms';
  }, []);

  return null;
}

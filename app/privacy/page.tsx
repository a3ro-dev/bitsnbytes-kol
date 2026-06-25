'use client';

import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    window.location.href = 'https://gobitsnbytes.org/privacy';
  }, []);

  return null;
}

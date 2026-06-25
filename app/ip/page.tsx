'use client';

import { useEffect } from 'react';

export default function IP() {
  useEffect(() => {
    window.location.href = 'https://gobitsnbytes.org/ip';
  }, []);

  return null;
}

'use client';

import { useEffect } from 'react';

export default function FAQ() {
  useEffect(() => {
    window.location.href = 'https://gobitsnbytes.org/faq';
  }, []);

  return null;
}

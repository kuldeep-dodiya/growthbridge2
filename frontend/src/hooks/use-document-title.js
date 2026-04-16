import { useEffect } from 'react';

/**
 * Sets the document title for the current page.
 * Appends " | Growth Bridge" suffix automatically.
 * @param {string} title - The page-specific title
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | Growth Bridge` : 'Growth Bridge — AI-Powered Growth Marketing';
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}

import React, { createContext, useContext, useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

const PortfolioContext = createContext(null);

// Fetch projects and dereference each media asset so we get the blur placeholder
// (metadata.lqip) and intrinsic dimensions for next/image. Both the new `media`
// (file) field and the legacy `image` field are expanded.
const PROJECTS_QUERY = `*[_type == "project"] | order(order asc){
  ...,
  images[]{
    ...,
    media{ ..., asset->{ _id, url, mimeType, metadata { lqip, dimensions } } },
    image{ ..., asset->{ _id, url, mimeType, metadata { lqip, dimensions } } }
  }
}`;

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [saraInfo, setSaraInfo] = useState(null);
  const [appearance, setAppearance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    Promise.all([
      client.fetch(PROJECTS_QUERY),
      client.fetch('*[_type == "sara_info"][0]'),
      client.fetch('*[_type == "appearance"][0]'),
    ])
      .then(([projectsData, sara, appearanceData]) => {
        if (!active) return;
        setProjects(projectsData || []);
        setSaraInfo(sara || null);
        setAppearance(appearanceData || null);

        if (appearanceData) {
          const root = document.documentElement;
          root.style.setProperty('--appearance-highlight-color', appearanceData.highlight_color);
          root.style.setProperty('--appearance-font-size', appearanceData.font_size + 'px');
          root.style.setProperty('--appearance-background-color', appearanceData.background_color);
        }
      })
      .catch(console.error)
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <PortfolioContext.Provider value={{ projects, saraInfo, appearance, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return ctx;
}

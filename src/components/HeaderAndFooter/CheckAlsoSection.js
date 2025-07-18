import React from 'react';
import { useLocation } from 'react-router-dom';

function CheckAlsoSection() {
  const location = useLocation();
  const currentPath = location.pathname;

  const checkAlsoLinks = [
    { path: "/treningi-personalne", label: "Treningi Personalne" },
    { path: "/treningi-plywackie", label: "Treningi Pływackie" },
    { path: "/kursy-na-trenera-personalnego", label: "Kursy na Trenera Personalnego" },
    { path: "/obozy-sportowe", label: "Obozy Sportowe" },
    { path: "/masaze", label: "Masaże Relaksacyjne" },
  ];

  if (currentPath === '/') {
    return null;
  }

  return (
    <div className="checkAlsoContainer">
      {checkAlsoLinks.map((link) => (
        link.path !== currentPath && (
          <a
            key={link.path}
            href={link.path}
            className="checkAlsoBox"
          >
            {link.label}
          </a>
        )
      ))}
    </div>
  );
}

export default CheckAlsoSection;
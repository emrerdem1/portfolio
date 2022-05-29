import React from 'react';
import useFirestoreDoc from 'Components/common/hooks/useFirestoreDoc';
import { CollectionNames } from 'Components/common/utils/firebaseHelper';

export const SocialLinks = () => {
  const { docs: socialLinks } = useFirestoreDoc({
    sortBy: 'order',
    collectionName: CollectionNames.CONTACT_LINKS,
  });

  return (
    <div id="social-links">
      <svg className="socialSectionSvg"></svg>
      <div className="socialsWrapper">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            alt={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-${social.name}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

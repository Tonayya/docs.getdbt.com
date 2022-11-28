import React from 'react'
import styles from './styles.module.css';

const SpotlightWrapper = ({ isSpotlightMember, children }) => {
  return isSpotlightMember ? (
    <header className={styles.spotlightMemberCard}>
      {children}
    </header>
  ) : (
    <div className={styles.spotlightMemberCard}>
      {children}
    </div>
  )
} 

export const CommunitySpotlightCard = ({ frontMatter, isSpotlightMember = false }) => {
  const { title, image, jobTitle, companyName, socialLinks } = frontMatter

  return (  
    <SpotlightWrapper isSpotlightMember={isSpotlightMember}>
      {image && (
        <div className={styles.spotlightMemberImgContainer}>
          <img 
            src={image} 
            alt={title} 
          />
        </div>
      )}
      <div className={styles.spotlightMemberContent}>
        <h1 className={styles.spotlightMemberHeader}>{title}</h1>
        {(jobTitle || companyName) && (
          <div className={styles.spotlightMemberInfo}>
            <span>
              {jobTitle && jobTitle}
              {jobTitle && companyName && ', '}
              {companyName && companyName}
            </span>
          </div>
        )}
        {socialLinks && socialLinks?.length > 0 && (
          <div className={styles.spotlightMemberSocial}>
            {socialLinks.map((item, i) => (
              <>
                {item?.name && item?.link && (
                  <>
                    {i !== 0 && ' | '}
                    <a href={item.link} title="#">{item.name}</a>
                  </>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </SpotlightWrapper>
  )
}
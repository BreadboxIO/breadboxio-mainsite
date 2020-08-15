import React from 'react';
import { AppDetailCallToAction } from '../components/app-detail-call-to-action';
import { AppDetailFooter } from '../components/app-detail-footer';
import { AppDetailHero } from '../components/app-detail-hero';
import { AppDetailReviews } from '../components/app-detail-reviews';
import AppIconImage from '../images/apps/ride-or-die/app-icon.jpg';
import FeatureImage1 from '../images/apps/ride-or-die/ride-or-die-02.png';
import FeatureImage2 from '../images/apps/ride-or-die/ride-or-die-03.png';
import FeatureImage3 from '../images/apps/ride-or-die/ride-or-die-04.png';
import HeroImage from '../images/apps/ride-or-die/ride-or-die-01.png';
import { Icon } from '../components/icon';

export const RideOrDieAppScreen = () => {
  const appName = 'Ride or Die';
  const appStoreLink = 'https://itunes.apple.com/app/id1265169204';
  const primaryColor = '#ffbb37';

  return (
    <div className="app-detail">
      <AppDetailHero
        appIconSrc={AppIconImage}
        appName={appName}
        appStoreLink="https://itunes.apple.com/app/id1265169204"
        heroImgSrc={HeroImage}
      />
      <div className="app-detail-features">
        <div>
          <h2>The Everyday Ride Safety App</h2>
          <p>Never get caught in dangerous weather while motorcycle or bike riding again!</p>
          <p>
            Just one tap away! Open up <strong>{appName}</strong> and instantly know <em>whether</em> the current{' '}
            <em>weather</em> conditions are comfortable for a motorcycle or bike ride.
          </p>
          <p>
            Swipe left and right to switch between your current ride conditions and your commute ride conditions. In
            Commute Mode, <strong>{appName}</strong> will utilize your commute times and your home/work locations to
            estimate <em>whether</em> the <em>weather</em> will match your riding preferences when you&apos;re leaving
            for and returning from work.
          </p>
          <p>Flip the &ldquo;Language&rdquo; setting to &ldquo;Explicit&rdquo; for a more aggressive ride message.</p>
          <div>
            <div className="app-detail-features__feature">
              <Icon name="mobile" style={{ color: primaryColor }} />
              <h3>Super Simple</h3>
              <p>
                Just open the app &amp; that&apos;s it! Instantly see the weather and whether it matches your preferred
                riding conditions
              </p>
            </div>
            <div className="app-detail-features__feature">
              <Icon name="building" style={{ color: primaryColor }} />
              <h3>Commute Mode</h3>
              <p>
                Enter your home and work locations to quickly see if the weather will be safe to ride on your way to and
                from work
              </p>
            </div>
            <div className="app-detail-features__feature">
              <Icon name="cog" style={{ color: primaryColor }} />
              <h3>Easily Personalized</h3>
              <p>
                Choose what types of weather in which you prefer riding so your ride always matches your comfort level
                for maximum safety
              </p>
            </div>
          </div>
        </div>
        <div className="app-detail-features__images">
          <div style={{ backgroundImage: `url(${FeatureImage1})` }} />
          <div style={{ backgroundImage: `url(${FeatureImage2})` }} />
          <div style={{ backgroundImage: `url(${FeatureImage3})` }} />
        </div>
      </div>
      <AppDetailReviews appName={appName} primaryColor={primaryColor} />
      <AppDetailCallToAction backgroundColor={primaryColor} appName={appName} appStoreLink={appStoreLink} />
      <AppDetailFooter />
    </div>
  );
};

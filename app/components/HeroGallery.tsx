'use client';

export default function HeroGallery() {


  return (
    <div className="hero-gallery" style={{ display: 'flex', justifyContent: 'flex-end', height: '66vh', minHeight: 400, width: '100%', alignItems: 'center' }}>
      {/* Image container: 66vh height, 70vw width */}
      <div style={{ height: '66vh', width: '70vw', background: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <img src="/hero-primary.jpg" alt="Hero" style={{ position: 'absolute', top: '50%', left: '50%', width: '66vh', height: '70vw', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: 'translate(-50%, -50%) rotate(-90deg)' }} />
      </div>
    </div>
  );
}

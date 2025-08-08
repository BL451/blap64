// Portrait collection media imports
import portraitHero from 'url:../../assets/photos/portrait/hero.webp';

// Optimized hero thumbnails (768x768 for fast loading)
import portraitHeroThumb from 'url:../../assets/photos/hero-thumbs/portrait-hero.webp';
import performanceHeroThumb from 'url:../../assets/photos/hero-thumbs/performance-hero.webp';
import aberrantHeroThumb from 'url:../../assets/photos/hero-thumbs/aberrant-hero.webp';
import astroHeroThumb from 'url:../../assets/photos/hero-thumbs/astro-hero.webp';
import portrait01 from 'url:../../assets/photos/portrait/portrait-01.webp';
import portrait02 from 'url:../../assets/photos/portrait/portrait-02.webp';
import portrait03 from 'url:../../assets/photos/portrait/portrait-03.webp';
import portrait04 from 'url:../../assets/photos/portrait/portrait-04.webp';
import portrait05 from 'url:../../assets/photos/portrait/portrait-05.webp';
import portrait06 from 'url:../../assets/photos/portrait/portrait-06.webp';
import portrait07 from 'url:../../assets/photos/portrait/portrait-07.webp';
import portrait08 from 'url:../../assets/photos/portrait/portrait-08.webp';
import portrait09 from 'url:../../assets/photos/portrait/portrait-09.webp';
import portrait10 from 'url:../../assets/photos/portrait/portrait-10.webp';
import portrait11 from 'url:../../assets/photos/portrait/portrait-11.webp';
import portrait12 from 'url:../../assets/photos/portrait/portrait-12.webp';
import portrait13 from 'url:../../assets/photos/portrait/portrait-13.webp';
import portrait14 from 'url:../../assets/photos/portrait/portrait-14.webp';
import portrait15 from 'url:../../assets/photos/portrait/portrait-15.webp';
import portrait16 from 'url:../../assets/photos/portrait/portrait-16.webp';
import portrait17 from 'url:../../assets/photos/portrait/portrait-17.webp';
import portrait18 from 'url:../../assets/photos/portrait/portrait-18.webp';
import portrait19 from 'url:../../assets/photos/portrait/portrait-19.webp';
import portrait21 from 'url:../../assets/photos/portrait/portrait-21.webp';
import portrait22 from 'url:../../assets/photos/portrait/portrait-22.webp';
import portrait23 from 'url:../../assets/photos/portrait/portrait-23.webp';
import portrait24 from 'url:../../assets/photos/portrait/portrait-24.webp';

// Performance collection media imports
import performanceHero from 'url:../../assets/photos/performance/hero.webp';
import performance01 from 'url:../../assets/photos/performance/performance-01.webp';
import performance02 from 'url:../../assets/photos/performance/performance-02.webp';
import performance03 from 'url:../../assets/photos/performance/performance-03.webp';
import performance05 from 'url:../../assets/photos/performance/performance-05.webp';
import performance06 from 'url:../../assets/photos/performance/performance-06.webp';
import performance07 from 'url:../../assets/photos/performance/performance-07.webp';
import performance08 from 'url:../../assets/photos/performance/performance-08.webp';
import performance09 from 'url:../../assets/photos/performance/performance-09.webp';
import performance10 from 'url:../../assets/photos/performance/performance-10.webp';
import performance11 from 'url:../../assets/photos/performance/performance-11.webp';

// Aberrant collection media imports
import aberrantHero from 'url:../../assets/photos/aberrant/hero.webp';
import aberrant01 from 'url:../../assets/photos/aberrant/aberrant-01.webp';
import aberrant02 from 'url:../../assets/photos/aberrant/aberrant-02.webp';
import aberrant03 from 'url:../../assets/photos/aberrant/aberrant-03.webp';
import aberrant04 from 'url:../../assets/photos/aberrant/aberrant-04.webp';
import aberrant05 from 'url:../../assets/photos/aberrant/aberrant-05.webp';
import aberrant06 from 'url:../../assets/photos/aberrant/aberrant-06.webp';
import aberrant07 from 'url:../../assets/photos/aberrant/aberrant-07.webp';
import aberrant08 from 'url:../../assets/photos/aberrant/aberrant-08.webp';
import aberrant09 from 'url:../../assets/photos/aberrant/aberrant-09.webp';
import aberrant10 from 'url:../../assets/photos/aberrant/aberrant-10.webp';
import aberrant11 from 'url:../../assets/photos/aberrant/aberrant-11.webp';
import aberrant12 from 'url:../../assets/photos/aberrant/aberrant-12.webp';
import aberrant13 from 'url:../../assets/photos/aberrant/aberrant-13.webp';

// Astro collection media imports
import astroHero from 'url:../../assets/photos/astro/hero.webp';
import astro01 from 'url:../../assets/photos/astro/astro-01.webp';
import astro02 from 'url:../../assets/photos/astro/astro-02.webp';
import astro03 from 'url:../../assets/photos/astro/astro-03.webp';
import astro04 from 'url:../../assets/photos/astro/astro-04.webp';
import astro05 from 'url:../../assets/photos/astro/astro-05.webp';
import astro06 from 'url:../../assets/photos/astro/astro-06.webp';
import astro07 from 'url:../../assets/photos/astro/astro-07.webp';
import astro08 from 'url:../../assets/photos/astro/astro-08.webp';
import astro09 from 'url:../../assets/photos/astro/astro-09.webp';
import astro10 from 'url:../../assets/photos/astro/astro-10.webp';
import astro10 from 'url:../../assets/photos/astro/astro-11.webp';

// Photo collections data structure
export const photoCollections = [
    {
        id: 'portrait',
        name: 'PORTRAIT',
        slug: 'portrait',
        description: 'Subjects in controlled and natural environments',
        heroImage: portraitHero,
        heroImageThumb: portraitHeroThumb,
        images: [
            portraitHero, // Hero image as first gallery item
            portrait01,
            portrait17,
            portrait15,
            portrait21,
            portrait16,
            portrait18,
            portrait19,
            portrait10,
            portrait06,
            portrait24,
            portrait11,
            portrait04,
            portrait05,
            portrait07,
            portrait22,
            portrait08,
            portrait23,
            portrait09,
            portrait12,
            portrait13,
            portrait14,
            portrait02,
            portrait03,
        ]
    },
    {
        id: 'aberrant',
        name: 'ABERRANT',
        slug: 'aberrant',
        description: 'Experimental and conceptual photographic explorations',
        heroImage: aberrantHero,
        heroImageThumb: aberrantHeroThumb,
        images: [
            aberrantHero, // Hero image as first gallery item
            aberrant13,
            aberrant01,
            aberrant02,
            aberrant07,
            aberrant08,
            aberrant03,
            aberrant04,
            aberrant05,
            aberrant06,
            aberrant09,
            aberrant10,
            aberrant11,
            aberrant12,
        ]
    },
    {
        id: 'performance',
        name: 'PERFORMANCE',
        slug: 'performance',
        description: 'Concerts, live events, and artistic performances',
        heroImage: performanceHero,
        heroImageThumb: performanceHeroThumb,
        images: [
            performanceHero, // Hero image as first gallery item
            performance09,
            performance11,
            performance01,
            performance03,
            performance08,
            performance10,
            performance02,
            performance06,
            performance07,
            performance05,
        ]
    },
    {
        id: 'astro',
        name: 'ASTRO',
        slug: 'astro',
        description: 'Celestial objects and astronomical phenomena',
        heroImage: astroHero,
        heroImageThumb: astroHeroThumb,
        images: [
            astroHero, // Hero image as first gallery item
            astro01,
            astro02,
            astro03,
            astro04,
            astro05,
            astro06,
            astro07,
            astro09,
            astro10
        ]
    }
];

// Helper functions
export const findCollectionBySlug = (slug) => {
    return photoCollections.find(collection => collection.slug === slug);
};

export const getCollectionIndexBySlug = (slug) => {
    return photoCollections.findIndex(collection => collection.slug === slug);
};

export const getNextCollection = (currentSlug) => {
    const currentIndex = getCollectionIndexBySlug(currentSlug);
    const nextIndex = (currentIndex + 1) % photoCollections.length;
    return photoCollections[nextIndex];
};

export const getPreviousCollection = (currentSlug) => {
    const currentIndex = getCollectionIndexBySlug(currentSlug);
    const prevIndex = currentIndex === 0 ? photoCollections.length - 1 : currentIndex - 1;
    return photoCollections[prevIndex];
};

import { html } from "lit-html";

import { photoCollections, findCollectionBySlug } from './photo-collections';

export default (props) => {
    const options = {};
    if (props && props.collection) {
        options.collection = props.collection;
    }
    if (props && props.skipAnimations) {
        options.skipAnimations = props.skipAnimations;
    }
    
    // Determine if we're in gallery mode
    const isGalleryMode = props?.collection;
    const collection = isGalleryMode ? findCollectionBySlug(props.collection) : null;
    
    return html`
        <!-- p5-element handles decorations, title, and lightbox -->
        <p5-element id="bg" sketch="photo" .options=${options} .skipAnimations=${props?.skipAnimations}></p5-element>
        
        ${isGalleryMode && collection ? html`
            <!-- HTML-native gallery grid -->
            <div class="photo-gallery-container">
                <div class="photo-gallery-grid">
                    ${collection.images.map((imagePath, index) => html`
                        <div class="photo-gallery-item" data-index="${index}">
                            <img 
                                src="${imagePath}" 
                                alt="${collection.name} ${index + 1}"
                                class="photo-gallery-image"
                                data-lightbox-index="${index}"
                                loading="lazy"
                                onload="this.classList.add('loaded');"
                            />
                        </div>
                    `)}
                </div>
            </div>
        ` : ''}
    `;
};
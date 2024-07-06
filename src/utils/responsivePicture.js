/**
 * Generates a responsive picture element.
 *
 * @param {string} desktopSrc - The source URL for the desktop version of the image.
 * @param {string} mobileSrc - The source URL for the mobile version of the image.
 * @param {string} altText - The alt text for the image.
 * @param {string} className - The class name for styling the picture element.
 * @returns {JSX.Element} - A responsive picture element.
 */
export const generateResponsivePicture = (desktopSrc, mobileSrc, altText, className) => (
    <picture className={className}>
        <source srcSet={mobileSrc} media="(max-width: 599px)" />
        <source srcSet={desktopSrc} media="(min-width: 600px)" />
        <source srcSet={mobileSrc} media="(min-width: 600px) and (orientation:portrait)" />
        <img src={desktopSrc} alt={altText} className={`${className}__img`} />
    </picture>
);

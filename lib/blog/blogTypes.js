/**
 * @typedef {Object} BlogParagraph
 * @property {string} text
 * @property {string} marginNote
 * @property {boolean} [highlighted]
 */

/**
 * @typedef {'personal' | 'research'} BlogCategory
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} date
 * @property {BlogCategory} [category]
 * @property {BlogParagraph[]} paragraphs
 * @property {string} pullQuote
 * @property {string} signature
 * @property {string} signatureMeta
 */

export {};

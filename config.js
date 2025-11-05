// config.js

// Tag Partenaire Principal/Par Défaut (onamzporinus-21)
const AMAZON_TAG_DEFAULT = process.env.AMAZON_PARTNER_TAG || 'onamzporinus-21'; 

// Tag Partenaire Spécifique pour la France (porinus-21)
const AMAZON_TAG_FRANCE = process.env.AMAZON_PARTNER_TAG_PORINUS || 'porinus-21';

// Nom de votre boutique unique en France
const SHOP_NAME_FRANCE = 'amourguadeloupe'; 

// Exportez les éléments
export { AMAZON_TAG_DEFAULT, AMAZON_TAG_FRANCE, SHOP_NAME_FRANCE };


const images = import.meta.glob('/public/character-images/*');
const imagePathsUntrimmed = Object.keys(images).map(key => key.slice(1));

// Vite doesn't like it when you include public in the file path yet glob only works with it 🤔
const characterImages = imagePathsUntrimmed.map(path => path.replace('public', ''));

export default characterImages;

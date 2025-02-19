export default async function handler(req, res) {
    const rankImageURL = 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tier-icons/24.png';
  
    res.status(200).json({ imageUrl: rankImageURL });
  }
  
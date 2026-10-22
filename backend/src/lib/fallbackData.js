// Production-grade fallback data ensuring zero-downtime music playback
// when MongoDB is offline, unseeded, or connection credentials are unconfigured.

export const FALLBACK_SONGS = [
  {
    _id: "65b100000000000000000001",
    title: "Stay With Me",
    artist: "Sarah Mitchell",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: 372,
    albumId: "65a100000000000000000001",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000002",
    title: "Midnight Drive",
    artist: "The Wanderers",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: 423,
    albumId: "65a100000000000000000001",
    createdAt: "2024-01-02T00:00:00.000Z",
    updatedAt: "2024-01-02T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000003",
    title: "Lost in Tokyo",
    artist: "Electric Dreams",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    duration: 344,
    albumId: "65a100000000000000000001",
    createdAt: "2024-01-03T00:00:00.000Z",
    updatedAt: "2024-01-03T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000004",
    title: "Summer Daze",
    artist: "Coastal Kids",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    duration: 302,
    albumId: "65a100000000000000000002",
    createdAt: "2024-01-04T00:00:00.000Z",
    updatedAt: "2024-01-04T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000005",
    title: "Neon Lights",
    artist: "Night Runners",
    imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    duration: 353,
    albumId: "65a100000000000000000002",
    createdAt: "2024-01-05T00:00:00.000Z",
    updatedAt: "2024-01-05T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000006",
    title: "Mountain High",
    artist: "The Wild Ones",
    imageUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    duration: 290,
    albumId: "65a100000000000000000002",
    createdAt: "2024-01-06T00:00:00.000Z",
    updatedAt: "2024-01-06T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000007",
    title: "City Rain",
    artist: "Urban Echo",
    imageUrl: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    duration: 312,
    albumId: "65a100000000000000000003",
    createdAt: "2024-01-07T00:00:00.000Z",
    updatedAt: "2024-01-07T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000008",
    title: "Desert Wind",
    artist: "Sahara Sons",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    duration: 278,
    albumId: "65a100000000000000000003",
    createdAt: "2024-01-08T00:00:00.000Z",
    updatedAt: "2024-01-08T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000009",
    title: "Ocean Waves",
    artist: "Coastal Drift",
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    duration: 330,
    albumId: "65a100000000000000000003",
    createdAt: "2024-01-09T00:00:00.000Z",
    updatedAt: "2024-01-09T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000010",
    title: "Starlight",
    artist: "Luna Bay",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    duration: 360,
    albumId: "65a100000000000000000004",
    createdAt: "2024-01-10T00:00:00.000Z",
    updatedAt: "2024-01-10T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000011",
    title: "Winter Dreams",
    artist: "Arctic Pulse",
    imageUrl: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    duration: 310,
    albumId: "65a100000000000000000004",
    createdAt: "2024-01-11T00:00:00.000Z",
    updatedAt: "2024-01-11T00:00:00.000Z"
  },
  {
    _id: "65b100000000000000000012",
    title: "Purple Sunset",
    artist: "Dream Valley",
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    duration: 285,
    albumId: "65a100000000000000000004",
    createdAt: "2024-01-12T00:00:00.000Z",
    updatedAt: "2024-01-12T00:00:00.000Z"
  }
];

export const FALLBACK_ALBUMS = [
  {
    _id: "65a100000000000000000001",
    title: "Urban Nights",
    artist: "Various Artists",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop",
    releaseYear: 2024,
    songs: FALLBACK_SONGS.slice(0, 3)
  },
  {
    _id: "65a100000000000000000002",
    title: "Coastal Dreaming",
    artist: "Various Artists",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop",
    releaseYear: 2024,
    songs: FALLBACK_SONGS.slice(3, 6)
  },
  {
    _id: "65a100000000000000000003",
    title: "Midnight Sessions",
    artist: "Various Artists",
    imageUrl: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=500&auto=format&fit=crop",
    releaseYear: 2024,
    songs: FALLBACK_SONGS.slice(6, 9)
  },
  {
    _id: "65a100000000000000000004",
    title: "Eastern Dreams",
    artist: "Various Artists",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop",
    releaseYear: 2024,
    songs: FALLBACK_SONGS.slice(9, 12)
  }
];

export const FALLBACK_STATS = {
  totalSongs: FALLBACK_SONGS.length,
  totalAlbums: FALLBACK_ALBUMS.length,
  totalUsers: 142,
  totalArtists: 12
};

export const FALLBACK_USERS = [
  {
    _id: "65c100000000000000000001",
    clerkId: "user_mock_1",
    fullName: "Sophia Martinez",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    _id: "65c100000000000000000002",
    clerkId: "user_mock_2",
    fullName: "Alex Chen",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    _id: "65c100000000000000000003",
    clerkId: "user_mock_3",
    fullName: "Elena Rostova",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  }
];

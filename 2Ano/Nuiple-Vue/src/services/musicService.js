import musics from '@/data/musics.json';
import albums from '@/data/albums.json';
import artists from '@/data/artists.json';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getAllMusics() {
  return musics;
}

export function getAllArtists() {
  return artists;
}

export function getRandomMusics(maxAmount = 16) {
  const shuffledMusics = shuffleArray([...musics]);
  return shuffledMusics.slice(0, maxAmount);
}

export function getMusicID(id) {
  return musics.find(music => music.id === id) ?? null;
}

export function getArtistID(id) {
  return artists.find(artist => artist.id === id) ?? null;
}

export function getArtistImage(id) {
  const image = getArtistID(id).img;
  if (!image) return 'no_image.jpg';
  return 'artist/' + image;
}

export function getMusicsFromArtist(id) {
  const artist = getArtistID(id);

  if (!artist) return null;

  return musics.filter(music => music.artists.includes(id));
}

export function getAlbumsFromArtist(id) {
  const artist = getArtistID(id);

  if (!artist) return null;

  return albums.filter(album => getAlbumArtists(album.id).includes(artist.id));
}

export function getMusicDuration(id) {
  // Returns a promise for the duration of the music in seconds.
  const music = getMusicID(id);
  
  if (!music?.file) return null;

  return new Promise((resolve, reject) => {
    const audio = new Audio(`/music/${music.file}`);

    audio.addEventListener('loadedmetadata', () => {
      resolve(audio.duration);
    }, { once: true });

    audio.addEventListener('error', reject, { once: true });
  });
}

export function getAllAlbums() {
  return albums;
}

export function getAlbumID(id) {
  return albums.find(album => album.id === id) ?? null;
}

export function getMusicsFromAlbum(id) {
  const album = getAlbumID(id);

  if (!album) return null;

  return musics.filter(music => music.album === id);
}

export async function getAlbumTotalDuration(id) {
  const musics = getMusicsFromAlbum(id);
  /* Alguma coisa com o tempo (--:--) tá errada aqui. Ajeitar depois... */
  let totalDuration = 0;
  for (const music of musics) {
    totalDuration += await getMusicDuration(music.id);
  }

  return totalDuration;
}

export function getAlbumGenres(id) {
  const musics = getMusicsFromAlbum(id);

  const genres = [...new Set([].concat(...musics.map(music => music.genres)))];

  return genres;
}

export function getAlbumArtists(id) {
  const musics = getMusicsFromAlbum(id);

  const artists = [...new Set([].concat(...musics.map(music => music.artists)))];

  return artists;
}

export function getAlbumImg(id) {
  const image = getAlbumID(id).img;
  if (!image) return 'no_image.jpg';
  return 'album_art/' + image;
}

export function getMusicImg(id) {
  return getAlbumImg(getMusicID(id).album);
}

export function searchMusics(text) {
  const musicsFound = [];
  text = text.toLowerCase();

  for (const music of musics) {
    const inTitle = music.title.toLowerCase().includes(text);
    const inArtists = music.artists.map(art => getArtistID(art).name.toLowerCase()).some(name => name.includes(text));
    const inAlbum = getAlbumID(music.album).name.toLowerCase().includes(text);
    if (inTitle || inArtists || inAlbum) musicsFound.push(music);
  }

  return musicsFound;
}

export function searchAlbums(text) {
  const albumsFound = [];
  text = text.toLowerCase();

  for (const album of albums) {
    const inName = album.name.toLowerCase().includes(text);
    const inArtists = getAlbumArtists(album.id).map(art => getArtistID(art).name.toLowerCase()).some(name => name.includes(text));
    if (inName || inArtists) albumsFound.push(album);
  }

  return albumsFound;
}

export function searchArtists(text) {
  const artistsFound = [];
  text = text.toLowerCase();

  for (const artist of artists) {
    const inName = artist.name.toLowerCase().includes(text);
    const inMusics = getMusicsFromArtist(artist.id).some(music => music.title.toLowerCase().includes(text));
    if (inName || inMusics) artistsFound.push(artist);
  }

  return artistsFound;
}

export function getMusicFile(id) {
  return `/music/${getMusicID(id).file}`;
}

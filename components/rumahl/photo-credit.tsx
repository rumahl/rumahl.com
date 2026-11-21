import {editorialPhotos} from '@/content/homepage';

export function PhotoCredit({src, linked = false}: {src?: string; linked?: boolean}) {
  const photo = Object.values(editorialPhotos).find((entry) => entry.src === src);
  if (!photo) return null;
  const label = `Photo: ${photo.author} / Unsplash`;
  return <small className="photo-credit">
    {linked ? <a href={photo.source} target="_blank" rel="noreferrer">{label}</a> : label}
  </small>;
}

import type { Photo } from '../data/types'
import { assetUrl } from '../lib/assetUrl'

/** A real photograph with an optional caption, lazy-loaded below the fold. */
export function Figure({ photo, className = '' }: { photo: Photo; className?: string }) {
  return (
    <figure className={className}>
      <img
        src={assetUrl(photo.src)}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-sm border border-line object-cover"
      />
      {photo.caption && <figcaption className="mt-2 font-mono text-xs text-ink-muted">{photo.caption}</figcaption>}
    </figure>
  )
}

import type { Photo } from '../data/types'
import { assetUrl } from '../lib/assetUrl'

/** Presents a real product screenshot inside a minimal browser window. */
export function BrowserFrame({ photo, address }: { photo: Photo; address?: string }) {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-paper-raised shadow-[0_1px_2px_rgb(0_0_0/0.04),0_12px_32px_-12px_rgb(0_0_0/0.18)]">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        {address && (
          <span className="min-w-0 truncate rounded-sm bg-paper px-2 py-0.5 font-mono text-[0.7rem] text-ink-muted">{address}</span>
        )}
      </div>
      <img
        src={assetUrl(photo.src)}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  )
}

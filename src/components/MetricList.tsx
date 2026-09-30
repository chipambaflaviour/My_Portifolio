import type { Metric } from '../data/types'

/** Headline numbers, each with the sentence that explains it. */
export function MetricList({ metrics, className = '' }: { metrics: Metric[]; className?: string }) {
  return (
    <dl className={`grid gap-px overflow-hidden rounded-sm border border-line bg-line ${className}`}>
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col-reverse justify-end bg-paper-raised px-5 py-5">
          <dt className="mt-2 text-sm leading-snug text-ink-soft">{metric.label}</dt>
          <dd className="font-display text-4xl leading-none font-medium text-copper">{metric.value}</dd>
        </div>
      ))}
    </dl>
  )
}

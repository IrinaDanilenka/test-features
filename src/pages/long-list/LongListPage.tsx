import { Link } from 'react-router-dom'
import { List, type RowComponentProps } from 'react-window'
import './LongListPage.css'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInfiniteLoader } from 'react-window-infinite-loader'

type LongListItem = {
  id: number
  title: string
  subtitle: string
}

type RowProps = {
  items: LongListItem[]
}

const TOTAL = 500

const Row = ({ index, style, items, ariaAttributes }: RowComponentProps<RowProps>) => {
  const { t } = useTranslation()
  const item = items[index]

  return (
    <div style={style} className="long-list__item" {...ariaAttributes}>
      {item ? (
        <article className="list-card">
          <div className="list-card__id">{item.id}</div>
          <div className="list-card__body">
            <h3 className="list-card__title">{item.title}</h3>
            <p className="list-card__subtitle">{item.subtitle}</p>
          </div>
        </article>
      ) : (
        <article className="list-card" aria-busy="true" aria-live="polite">
          <div className="list-card__id">...</div>
          <div className="list-card__body">
            <h3 className="list-card__title">{t('longList.loadingTitle')}</h3>
            <p className="list-card__subtitle">{t('longList.loadingSubtitle')}</p>
          </div>
        </article>
      )}
    </div>
  )
}

function LongListPage() {
  const { t } = useTranslation()

  const allItems = useMemo<LongListItem[]>(
    () =>
      Array.from({ length: TOTAL }, (_, index) => {
        const id = index + 1
        return {
          id,
          title: t('longList.itemTitle', { id }),
          subtitle: t('longList.itemSubtitle'),
        }
      }),
    [t],
  )

  const chunkSize = 50
  const [loadedCount, setLoadedCount] = useState(100)
  const [isLoading, setIsLoading] = useState(false)

  const visibleItems = allItems.slice(0, loadedCount)
  const hasNextPage = loadedCount < allItems.length

  const isRowLoaded = (index: number) => index < loadedCount

  const loadMoreRows = async () => {
    if (isLoading || !hasNextPage) return

    setIsLoading(true)
    setLoadedCount(prev => Math.min(prev + chunkSize, allItems.length))
    setIsLoading(false)
  }

  const onRowsRendered = useInfiniteLoader({
    isRowLoaded,
    loadMoreRows,
    rowCount: allItems.length,
    threshold: 10,
    minimumBatchSize: chunkSize,
  })

  return (
    <div className="long-list-page">
      <header className="long-list-page__bar">
        <Link className="long-list-page__back" to="/">
          {t('longList.backHome')}
        </Link>
      </header>

      <header className="long-list-page__hero" aria-labelledby="long-list-title">
        <p className="long-list-page__eyebrow">{t('longList.eyebrow')}</p>
        <h1 id="long-list-title" className="long-list-page__title">
          {t('longList.title')}
        </h1>
        <p className="long-list-page__lead">{t('longList.lead')}</p>
      </header>

      <section className="long-list-page__panel" aria-label={t('longList.panelAriaLabel')}>
        <div className="long-list-page__panel-head">
          <h2 className="long-list-page__panel-title">{t('longList.panelTitle')}</h2>
          <span className="long-list-page__counter">{t('longList.total', { count: TOTAL })}</span>
        </div>

        <List
          onRowsRendered={onRowsRendered}
          rowCount={allItems.length}
          rowHeight={75}
          rowComponent={Row}
          rowProps={{ items: visibleItems }}
          style={{
            height: 500,
          }}
        />
      </section>
    </div>
  )
}

export default LongListPage

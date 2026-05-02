import { Link } from 'react-router-dom'
import { List, type RowComponentProps } from 'react-window'
import './LongListPage.css'
import { useState } from 'react'
import { useInfiniteLoader } from 'react-window-infinite-loader'

type LongListItem = {
  id: number
  title: string
  subtitle: string
}

type RowProps = {
  items: LongListItem[]
}

const ITEMS: LongListItem[] = Array.from({ length: 500 }, (_, index) => {
  const id = index + 1

  return {
    id,
    title: `Элемент #${id}`,
    subtitle: `Тестовая строка для тренировки virtualization и infinite loading.`,
  }
})

const Row = ({ index, style, items, ariaAttributes }: RowComponentProps<RowProps>) => {
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
            <h3 className="list-card__title">Загрузка...</h3>
            <p className="list-card__subtitle">Подгружаем следующий набор элементов.</p>
          </div>
        </article>
      )}
    </div>
  )
}

function LongListPage() {
  const allItems = ITEMS
  const [visibleItems, setVisibleItems] = useState<LongListItem[]>(allItems.slice(0, 100))
  const [isLoading, setIsLoading] = useState(false)
  const chunkSize = 50
  const loadedCount = visibleItems.length
  const hasNextPage = loadedCount < allItems.length

  const isRowLoaded = (index: number) => index < loadedCount

  const loadMoreRows = async () => {
    if (isLoading || !hasNextPage) return

    setIsLoading(true)
    setVisibleItems(prevItems => {
      const nextLoadedCount = Math.min(prevItems.length + chunkSize, allItems.length)
      return [...prevItems, ...allItems.slice(prevItems.length, nextLoadedCount)]
    })
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
          ← На главную
        </Link>
      </header>

      <header className="long-list-page__hero" aria-labelledby="long-list-title">
        <p className="long-list-page__eyebrow">Long List Playground</p>
        <h1 id="long-list-title" className="long-list-page__title">
          Длинный список
        </h1>
        <p className="long-list-page__lead">
          Базовая страница для будущих экспериментов с `react-window` и
          `react-window-infinite-loader`.
        </p>
      </header>

      <section className="long-list-page__panel" aria-label="Список элементов">
        <div className="long-list-page__panel-head">
          <h2 className="long-list-page__panel-title">Все элементы</h2>
          <span className="long-list-page__counter">Всего: {ITEMS.length}</span>
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

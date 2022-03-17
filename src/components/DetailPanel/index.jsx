import React, {useEffect, useRef} from 'react'
import Book from '../Book'
import {BG, Close, CloseWrapper, Em, P, Panel} from './styles'

const DetailPanel = ({book, closePanel, state}) => {
  const panelEL = useRef(null)
  const prevBook = useRef(null)
  console.log(state)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEL.current.scrollTop = 0
    }

    prevBook.current = book;
  }, [book, prevBook])

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEL}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
            <Book book={book} isLarge={true} />
            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel

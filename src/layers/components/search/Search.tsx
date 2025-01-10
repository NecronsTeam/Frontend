import React, { FC, useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { ISearchable } from '../../../types/ISearchable';

interface ISearchProps<T extends ISearchable> {
  allItems: T[],
  onInput: (items: T[]) => void
}

export default function Search<T extends ISearchable>({allItems, onInput}: ISearchProps<T>) {
  const [query, setQuery] = useState<string>('');
  
  useEffect(() => {
    const filteredItems = allItems.filter(item => item.getName() === query);
    onInput(filteredItems);
  }, [query]);

  return (
    <div className={styles.search}>
      <input type='text' value={query} onChange={(event) => setQuery(event.target.value)}/>
    </div>
  )
}
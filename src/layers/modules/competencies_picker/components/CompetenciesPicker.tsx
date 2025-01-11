import React, { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import styles from './CompetenciesPicker.module.scss'
import { IActivity } from '../../../../types/IActivity';
import { Competency, ICompetency } from '../../../../types/ICompetency';
import { CompetencyService } from '../../../../services/CompetencyService';
import CompetencyCard from '../../../components/competency_card/CompetencyCard';
import Search from '../../../components/search/Search';

interface ISelectActivitiesProps {
  competencies: ICompetency[]
  onChange: (competencies: ICompetency[]) => void
}

const CompetenciesPicker: FC<ISelectActivitiesProps> = ({ competencies, onChange }) => {
  const s = competencies;
  const [query, setQuery] = useState<string>('');
  const [filteredComptencies, setFilteredCompetencies] = useState<ICompetency[]>([]);
  const filteredCompetenciedListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const response = CompetencyService.getAll(query).then(res => {
      setFilteredCompetencies(res.data.competencies);
    });
  }, [query]);

  const selectCompetencyClickHandler: MouseEventHandler<HTMLUListElement> = (event: any) => {
    const closestResult = event.target.closest('li');
    if (!closestResult || closestResult.dataset.isSelect == "true") return;
    closestResult.dataset.isSelect = true;
    closestResult.classList.add(styles.selected);
    if (competencies.find(c => c.id == closestResult.dataset.id)) return;
    const selectedCompetency = filteredComptencies.filter(fC => fC.id == closestResult.dataset.id)[0];
    onChange([...competencies, selectedCompetency]);
  }

  const removeCompetencyHandler: MouseEventHandler<HTMLUListElement> = (event: any) => {
    const closestResult = event.target.closest(`li`);
    if (!closestResult || !event.target.classList.contains(styles.deleteSelectedCompetency)) return;
    const updateCompetency = competencies.filter(sC => sC.id != closestResult.dataset.id);
    const listItem = document.querySelector(`#searchList li[data-id="${closestResult.dataset.id}"]`) as any;
    if (!listItem) return;
    listItem.dataset.isSelect = false;
    listItem.classList.remove(styles.selected);
    onChange(updateCompetency);

  }

  return (
    <div className={styles.picker}>
      <div className={styles.pickerContainer}>
        <div className={styles.selectedCompetencies}>
          <ul className={styles.selectedCompetenciesList} onClick={removeCompetencyHandler}>
            {
              competencies.map(competency => (
                <li className={styles.selectedCompetenciesListItem} key={competency.id} data-id={competency.id}>
                  <div className={styles.selectedCompetenciesListItemText}>
                    {
                      competency.name
                    }
                  </div>
                  <div className={styles.deleteSelectedCompetency}>
                    &#215;
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.searchCompetencies}>
          <div className={styles.searchInput}>
            <input type='text'
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Название навыка, например "JavaScript"'
              onFocus={(event) => {
                if (filteredCompetenciedListRef.current) {
                  filteredCompetenciedListRef.current.classList.remove(styles.hidden)
                }
              }}
            />
          </div>
          <div className={`${styles.searchCompetenciesListWrapper} ${styles.hidden}`} ref={filteredCompetenciedListRef}>
            <div className={styles.closeBtn} onClick={(event) => {
              if (filteredCompetenciedListRef.current) {
                filteredCompetenciedListRef.current.classList.add(styles.hidden)
              }
            }}>
              &#215;
            </div>
            <div className={styles.title}>
              Найденные компентенции
            </div>
            <ul className={styles.searchCompetenciesList} onClick={selectCompetencyClickHandler} id="searchList">
              {
                filteredComptencies.map(competency => (
                  <li className={styles.searchCompetenciesListItem} key={competency.id} data-id={competency.id}>
                    {competency.name}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetenciesPicker;
import React, { FC, useEffect, useState } from 'react';
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

const CompetenciesPicker:FC<ISelectActivitiesProps> = ({competencies, onChange}) => {
  const s = competencies;
  const [query, setQuery] = useState<string>('');
  const [filteredComptencies, setFilteredCompetencies] = useState<ICompetency[]>([]);

  useEffect(() => {
    const response = CompetencyService.getAll().then(res => { 
      setFilteredCompetencies(res.data.competencies);
    });
  }, [query]);

  return (
    <div className={styles.picker}>
      <div className={styles.pickerContainer}>
        <div className={styles.searchCompetencies}>
            <div className={styles.searchInput}>
              <input type='text' onChange={(event) => setQuery(event.target.value)}/>
            </div>
            <div className={styles.searchCompetenciesList}>
              {
                filteredComptencies.map(competency => (
                  <li className={styles.searchCompetenciesListItem} key={competency.id}
                    onClick={(event) => {
                      if (competencies.every(c => c.id != competency.id)) {
                        onChange([competency, ...competencies])
                      }
                    }}
                  >
                    {competency.name}
                  </li>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default CompetenciesPicker;
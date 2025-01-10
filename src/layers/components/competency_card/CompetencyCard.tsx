import React, { FC } from 'react';
import styles from './CompetencyCard.module.scss';

interface ICompetencyCardProps {
  name: string
}

const CompetencyCard:FC<ICompetencyCardProps> = ({name}) => {
  return (
    <div className={styles.card}>
      {name}
    </div>
  );
};

export default CompetencyCard;
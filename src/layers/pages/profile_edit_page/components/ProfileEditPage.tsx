import React from 'react';
import styles from './ProfileEditPage.module.scss';
import { useLoaderData } from 'react-router-dom';
import { IProfile } from '../../../../types/Profile';
import ProfileEditForm from '../../../modules/profile_edit_form/components/ProfileEditForm';

const ProfileEditPage = () => {
  const profile = useLoaderData<IProfile>();

  return (
    <div className={`${styles.page} _flexGrow`}>
      <div className={`${styles.pageContainer} _flexGrow`}>
        <div className={styles.header}>
        </div>
        <div className={styles.formContainer}>
          <ProfileEditForm profile={profile}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;
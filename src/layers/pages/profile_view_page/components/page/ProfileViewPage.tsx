import React, { useContext } from 'react';
import styles from './ProfileViewPage.module.scss';
import avatarExample from '../../images/example.png';
import { useLoaderData, useParams } from 'react-router-dom';
import { IProfile } from '../../../../../types/Profile';
import ProfileViewCard from '../../../../components/profile_view_card/ProfileViewCard';
import { StoreContext } from '../../../../../main';
import { Link } from 'react-router-dom';

const ProfileViewPage = () => {
  const profile = useLoaderData<IProfile>();
  const { store } = useContext(StoreContext);
  const { userId } = useParams();
  useLoaderData()
  return (
    <div className={`${styles.page} ${'_flexGrow'}`}>
      <div className={`${styles.pageContainer} ${'_flexGrow'}`}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.headerInfo}>
              <div className={styles.fullName}>
                {`${profile.firstName} ${profile.middleName}`}
              </div>
              <div className={styles.tgLink}>
                {profile.telegramLink}
              </div>              
            </div>
            {
              store.user.id == userId ? (
              <div className={styles.settingsBtn}>
                <Link to={`/profile/edit/${userId}`}>
                  Редактировать
                </Link>
              </div>                
              ) : <></>
            }

            <div className={styles.profileAvatar}>
              <div className={styles.profileAvatarContainer}>
                <img src={avatarExample}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <ProfileViewCard {...profile}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewPage;
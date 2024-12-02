import styles from './LoginPage.module.scss';
import LoginForm from '../../../modules/login_form/components/LoginForm';

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <div className={styles.formWrapper}>
          <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
import styles from './Button.module.css';

// Finished example of a reusable UI component. Week 16: use it as the pattern
// for Card, Input and Modal.
export default function Button({ variant = 'primary', className = '', ...props }) {
  return <button className={`${styles.button} ${styles[variant]} ${className}`} {...props} />;
}

import { motion } from 'framer-motion';
import styles from './styles.module.scss';


const animation = {
  borderRadius:"0%",
  height: "100%",
  width: "100%"
}

export function Loading() {
  return (
    <div className={styles.container}>
      <motion.div animate={animation} transition={{delay: 1,default: {duration: 0.5}}} className={styles.content}>
        <h1 className={styles.title}>Recicle<br/>BEM</h1>
      </motion.div>
    </div>
  );
}
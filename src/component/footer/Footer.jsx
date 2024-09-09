import React from 'react'
import styles from './footer.module.css'

function Footer({completedTodos,totalTodos}) {
  return (
    <div className={styles.footer}>
        <span className = {styles}>
            Completed Todos : {completedTodos}
        </span>

        <span>
            Total Todos : {totalTodos}
        </span>

    </div>
  )
}

export default Footer
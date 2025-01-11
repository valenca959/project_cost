import styles from './ServiceCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove }) {

    const remove = (e)=> {
    e.preventDefault()
    handleRemove(id, cost)
    }

  return (
    <div className={styles.service_card}>
      <p>
        <span>Nome:</span> {name}
      </p>
      <p>
        <span>Custo:</span> R${cost}
      </p>
      <p>
        <span>Descrição:</span> {description}
      </p>
      <button className={styles.btn} onClick={remove}>
        <BsFillTrashFill />
        Remover
      </button>
    </div>
  )
}

export default ServiceCard
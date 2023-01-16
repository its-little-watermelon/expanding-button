import styles from '../styles/ExpandingButton.module.css'
import { AiOutlineDelete, AiFillGithub, AiOutlineEdit } from 'react-icons/ai'

const ExpandingButton = () => {
	return (
		<div className={styles.container}>
			<button>
				<AiOutlineDelete />
			</button>
			<a href='/'>
				<AiFillGithub />
			</a>
			<button>
				<AiOutlineEdit />
			</button>
		</div>
	)
}

export default ExpandingButton

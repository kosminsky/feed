import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" 
            />

            <div className={styles.profile}>
                <strong>Mikhael Kosminsky</strong>
                <span>Infelizmente pimo do troll Soni</span>
            </div>

            <footer>
                <a href="#">
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
}
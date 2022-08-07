import './styles.css';

export default function Home() {
    return(
        <div className="home_container">
            <div className="home_about_container">
                <div className='home_about'>
                    <h1>Sobre</h1>
                    <p>Fundada em 2019 por alunos da Universidade Federal de Viçosa (UFV), a LAMF5 (Liga Acadêmica de Mercado Financeiro), tem como principal objetivo: desenvolver estudos e pesquisas acadêmicas de alta aplicabilidade, e a partir disso, produzir conteúdo para toda sociedade.</p>
                </div>
            </div>
            <div className='home_values_container'>
                <h1>Pilares</h1>
                <div className='home_about_values_container'>
                    <div className='home_values'>
                        Networking
                    </div>
                    <div className='home_values'>
                        Aprendizado
                    </div>
                    <div className='home_values'>
                        Desenvolvimento
                    </div>
                </div>
            </div>
        </div>
        )
}
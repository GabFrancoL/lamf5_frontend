/* eslint-disable no-restricted-globals */
import './App.css';
import { Layout, Button } from 'antd';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Logo from './assets/logo.png';
import { useHistory } from 'react-router-dom';
import PageRouter from './services/routes';

export function App() {
  const history = useHistory();

  return (
    <div className="main">
      <Layout className='main_layout'>
        <Header className='main_header'>
          <a href={ () => {
            history.push('/')
          }}>
            <div className='main_container_logo'>
              <img src={ Logo } alt='Logo' className='main_logo'/>
            </div>
          </a>
          <div className='main_container_routes'>
            <Button className='main_routes_btn' type='text' key={ 1 } onClick={ () => {
              history.push('/')
            }}>Home</Button>
            <Button className='main_routes_btn' type='text' key={ 2 } onClick={ () => {
              history.push('/events')
            }}>Eventos</Button>
            <Button className='main_routes_btn' type='text' key={ 3 } onClick={ () => {
              history.push('/members')
            }}>Membros</Button>
            <Button className='main_routes_btn' type='text' key={ 4 } onClick={ () => {
              history.push('/blog')
            }}>Blog</Button>
            <Button className='main_routes_btn' type='text' key={ 5 } onClick={ () => {
              history.push('/contact')
            }}>Contato</Button>
          </div>
        </Header>
        <Content className='main_content'>
          <PageRouter />
        </Content>
        <Footer className='main_footer'>
          <div className='main_rights' id='main_rights'>
            Todos os direitos reservados @ 2022 LAMF5 | Criado por Gabriel Franco
          </div>
          <div className='main_social_media'>
            <Button className='main_social_media_btn' id='twitter_btn' type='text' onClick={ () => {
              location.href = ''
            }}><TwitterOutlined /></Button>
            <Button className='main_social_media_btn' id='instagram_btn' type='text' onClick={ () => {
              location.href = 'https://www.instagram.com/lamf5.ufv/'
            }}><InstagramOutlined /></Button>
            <Button className='main_social_media_btn' id='facebook_btn' type='text' onClick={ () => {
              location.href = ''
            }}><FacebookOutlined /></Button>
            <Button className='main_social_media_btn' id='linkedin_btn' type='text' onClick={ () => {
              location.href = 'https://www.linkedin.com/company/liga-academica-lamf5/'
            }}><LinkedinOutlined /></Button>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;

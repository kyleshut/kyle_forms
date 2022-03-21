import Head from 'next/head'
import home from '../styles/pages/home.module.scss'
import Navbar from '../components/Navbar'
import EmailForm from '../components/EmailForm'
export default function Home() {
  return (
    <div className={home.root}>
      <Navbar></Navbar>
      <EmailForm></EmailForm>
    </div>
  );
}

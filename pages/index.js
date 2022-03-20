import Head from 'next/head'
import home from '../styles/pages/home.module.scss'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className={home.root}>
      <Navbar></Navbar>
      <div className={home.content_container}>
        <div className={home.heading_container}>
          <h2 className={home.heading_content}>Updated: 10 minutes ago</h2>
          <h2 className={home.heading_content}>100 Skunks</h2>
          <h2 className={home.heading_content}>Share</h2>
        </div> 
        <WaiverWirePickups></WaiverWirePickups>
      </div>
    </div>
  );
}

import Head from 'next/head'
import Navbar from '../components/Navbar'
import UsersTable from '../components/UsersTable';
export default function Table() {
  return (
    <div>
      <Navbar></Navbar>
      <UsersTable></UsersTable>
    </div>
  );
}
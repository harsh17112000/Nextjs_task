import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Signin from './Signin'
import SIgnUp from './signup'

export default function Home() {
  return (
   <>
     <Signin />
   </>
  )
}

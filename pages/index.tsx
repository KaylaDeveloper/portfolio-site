import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Footer from '../components/footer'
import Header from '../components/header'
import Profile from '../components/profile'
import ProjectPreview from '../components/project_preview'
import Layout from '../components/layout'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const projectMetaDataArray = [
    {
      title: "Data Analysis App",
      desc: "Process data in Python",
      linkURL: "/data-analysis",
      image: "/coding.jpeg"
    },
    {
      title: "Sound Processing App",
      desc: "Cleans up podcast audio",
      linkURL: "/sound-processing",
      image: "/headphones.jpeg"
    },
    {
      title: "Social Media Tracker",
      desc: "Tracks time and usage",
      linkURL: "/social-media-tracker",
      image: "/youtube.jpeg"
    },
  ]

  const projectPreviewElements: ReactNode[] = projectMetaDataArray.map((projectMetaData) => {
   return  <ProjectPreview key={projectMetaData.title} {...projectMetaData} />
  })
  return (
   <div>
    <Profile/>
    <div className='mt-4 flex flex-col gap-2'>
      {projectPreviewElements}
    </div>
   </div>
        
  )
}

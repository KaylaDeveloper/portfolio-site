import { Inter } from '@next/font/google'
import Image from 'next/image';
import Link from 'next/link'
import projectImage from "../public/coding.jpeg";

const inter = Inter({ subsets: ['latin'] })

export default function DataAnalysis() {
  return (
    <div>
        <h1 className='text-xl text-indigo-600 mb-4 font-bold'>Data Analysis App</h1>
        <Image src={projectImage} alt=""/>
        <div className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ut velit in tincidunt. Aliquam ultricies, sem vel tempus sodales, felis massa ullamcorper justo, vel elementum justo velit quis odio. Sed pretium facilisis hendrerit. Proin malesuada augue nec magna pretium posuere. Sed dignissim vehicula nisi eget volutpat. In molestie lacinia erat eu tristique. Suspendisse mattis posuere dui sed tempor. Phasellus vel tempor lectus. Aliquam hendrerit, tellus et porttitor pretium, diam nulla iaculis nulla, ac pellentesque leo lacus et ipsum. Duis fermentum diam in nunc sagittis pharetra. Sed risus lacus, pellentesque sed sem nec, mattis varius diam. Cras finibus gravida mollis.</div>  
        <Link href="/" className="font-bold underline hover:text-indigo-600">      
          Back
        </Link>  
    </div>
  )
}

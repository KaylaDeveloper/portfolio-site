import Image from "next/image";
import Link from "next/link";

interface ProjectPreviewInterface {
  title: string;
  desc: string;
  linkURL: string;
  image: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {

  return (
    <div className="flex gap-4 bg-slate-200">
      <div className="relative w-24 h-16">
        <Image src={props.image} alt="" layout="fill" />
      </div>
      <div className="my-auto">
        <Link href={props.linkURL} className="font-bold underline hover:text-indigo-600">      
          {props.title}
        </Link>
        <div>{props.desc}</div>
      </div>
    </div>
  )
}

export default ProjectPreview
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Footer = () => {
    
    return  (
        <div className='text-center border-t border-slate-300 p-4'>
            <div>Designed and build by Kayla.</div>
            <Link href={'https://github.com/KaylaDeveloper'} className='text-2xl text-slate-300'>
            <GitHubIcon />
            </Link>
        </div>
    )
}

export default Footer;
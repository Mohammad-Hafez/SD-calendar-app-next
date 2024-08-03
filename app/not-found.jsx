import Image from "next/image";
import notFoundImg from '../public/404.svg'
import Link from 'next/link'
import { Button } from "antd";

export const metadata = {
    title: '404 - Not Found ',
    description: 'not found route',
  }
  
  export default function NotFound() {
    return (
        <div className="bg-white h-screen flex flex-col items-center justify-center">
            <Image
                src={notFoundImg}
                alt="not found 404 image"
                className="w-fit"
            />
            <Link href="/" passHref>
                <Button>Back to Home</Button>
            </Link>
        </div>
    );
}
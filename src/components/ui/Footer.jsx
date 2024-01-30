import { LinkIcon } from "./icons/LinkIcon"
import { IgIcon } from "./icons/IgIcon"
import { FbIcon } from "./icons/FbIcon"

export default function Footer() {
  return (
    <>
        <footer className='bg-violet-100 mt-20'>
                <div className='flex justify-center container mx-auto p-6'>
                    <LinkIcon/>
                    <IgIcon/>
                    <FbIcon/>
                </div>
        </footer>
    </>
  )
}

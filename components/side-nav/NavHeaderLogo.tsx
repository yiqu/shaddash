/* eslint-disable readable-tailwind/multiline */
import Image from 'next/image';

export default function NavHeaderLogo() {
  return (
    <>
      <Image 
        src="/images/boba.png" 
        width={ 40 } 
        height={ 40 } 
        alt="logo" 
        className="shrink-0" 
        data-hide-on-theme="dark"
      />
      
      <Image 
        src="/images/boba-dark.png" 
        width={ 40 } 
        height={ 40 } 
        alt="logo" 
        className="shrink-0" 
        data-hide-on-theme="light"
      />
    </>
  );
}

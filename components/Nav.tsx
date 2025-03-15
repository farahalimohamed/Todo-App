import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react'
import ModelToggle from './ModelToggle';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center py-4 mx-auto px-20'>
      <ModelToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
}

export default Nav
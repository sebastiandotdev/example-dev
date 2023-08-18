'use client'

import menuToggle from '@/public/menu-duo.png'
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useState } from 'react'

export default function NavbarHome() {
  const [isMenuOpen, setItsMenuOpen] = useState(false)
  return (
    <Navbar
      className='bg-color-root shadow'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setItsMenuOpen}
      disableAnimation={true}
    >
      <NavbarBrand>
        <h1 className='font-bold text-3xl'>Johan Sebastian Castro</h1>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <Link href='#' aria-current='page' className='hover:underline'>
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground' className='hover:underline'>
            Asesorias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground' className='hover:underline'>
            Proyecto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='sm:hidden' justify='center'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem isActive>
          <Link href='#' aria-current='page' className='hover:underline'>
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground' className='hover:underline'>
            Asesorias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground' className='hover:underline'>
            Proyecto
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  )
}

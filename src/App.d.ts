interface NavbarMenu {
    name: string,
    href: string,
    current: boolean
}

declare module 'appVar' {
    let listMenuNavbar: NavbarMenu[]
}

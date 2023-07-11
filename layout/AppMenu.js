import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Master',
            items: [
                {
                    label: 'Pegawai',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Data Pegawai',
                            icon: 'pi pi-fw pi-id-card',
                            to:'/menu/pegawai'
                        },
                        {
                            label: 'Data Jabatan',
                            icon: 'pi pi-fw pi-id-card',
                            to:'/menu/jabatan'
                        },
                        {
                            label: 'Data Golongan',
                            icon: 'pi pi-fw pi-id-card',
                            to:'/menu/golongan'
                        },
                    ]
                },
                { label: 'Pejabat Penanda tangan SPT', icon: 'pi pi-fw pi-verified', to: '/menu/pejabat_spt' },
                { label: 'Pejabat Penanda tangan SPPD', icon: 'pi pi-fw pi-verified', to: '/menu/pejabat_sppd' },
                { label: 'SPT', icon: 'pi pi-fw pi-book', to: '/menu/spt' },
                { label: 'SPPD', icon: 'pi pi-fw pi-mobile', to: '/menu/sppd'},
                { label: 'Kwitansi', icon: 'pi pi-fw pi-money-bill', to: '/menu/kwitansi' },
                { label: 'User', icon: 'pi pi-fw pi-user', to: '/menu/user' },
                { label: 'Logout', icon: 'pi pi-fw pi-sign-out', to: '#' }
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                {/* <Link href="https://spse.beraukab.go.id/eproc4" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="LPSE" className="w-full mt-3" src={`/layout/images/lpse-node.png`} width="20" />
                </Link> */}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;

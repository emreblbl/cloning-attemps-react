import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";


export const navItems = [
    { text: 'Araçlar', href: '#' },
    { text: 'Enerji', href: '#' },
    { text: 'Şarj', href: '#' },
    { text: 'Keşfet', href: '#' },
];

export const headerIcons = [
    { icon: faCircleQuestion, ariaLabel: 'Destek', href: '/tr_tr/support', type: 'link' },
    { icon: faGlobe, ariaLabel: 'Region & Language', href: '#', type: 'button' },
    { icon: faUser, ariaLabel: 'Hesap', href: '/tr_tr/teslaaccount', type: 'link' },
];

import {v4 as uuidv4} from 'uuid'
function navElements() {
    return [
        {
            href: 'about',
            name: 'About Me',
            id: uuidv4(),
            selected: true
        },
        {
            href: 'works',
            name: 'Portfolio',
            id: uuidv4(),
            selected: false
        },
        {
            href: 'contact',
            name: 'Contact',
            id: uuidv4(),
            selected: false
        },
        {
            href: 'resume',
            name: 'Resume',
            id: uuidv4(),
            selected: false
        }
    ]
};

export default navElements;
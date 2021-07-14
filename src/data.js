import { BiDollarCircle } from "react-icons/bi";
import {FaShoppingCart} from 'react-icons/fa';
import {FaShippingFast} from 'react-icons/fa';
import img from "./pics/PBCLZE0.jpg"
import image1 from "./pics/0_.png"
import image3 from "./pics/75_.png"
import image4 from "./pics/50_.png"
import image5 from "./pics/25_.png"
import image2 from "./pics/75_.png"
const data = {
    products :[
    {
        id:1111111,
        name:"Smart Watch",
        description:"apple smart watch",
        price:"30",
        category:"Electronics",
        image:img,
    },
    {
        id:2222222,
        name:"Smart Watch",
        description:"apple smart watch",
        price:"30",
        category:"Electronics",
        image:img,
    },
    {
        id:3333333,
        name:"Smart Watch",
        description:"apple smart watch",
        price:"30",
        category:"Electronics",
        image:img,
    },
    {
        id:4444444,
        name:"Smart Watch",
        description:"apple smart watch",
        price:"30",
        category:"Electronics",
        image:img,
    },
    ],
    cards : [
    {
        id:11,
        title : 'Orders',
        number : '350,000',
        icon : <FaShoppingCart color={'#fff'} size={55}/>,
        background:"#0099ff",
        color:'colors'
    }
    ,
    {
        id:12,
        title : 'Shipped',
        number : '350,000',
        icon : <FaShippingFast color={'#fff'} size={55}/>,
        background:"#0099ff",
        color:'colors'
    },
    {
        id:13,
        title:"Revenue",
        number:33000,
        icon:<BiDollarCircle color={'#fff'} size={60}/>,
        color:'colors'
    }
    ],
    orders : [
    {
        id: '1',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image1,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '2',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image2,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '3',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image3,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '4',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image4,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '5',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image5,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '6',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image3,
        payment:'on delivery',
        total:'500 $',
    },
    ],
    customers : [
    {
        id: '111',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '222',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '333',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '444',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '555',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '666',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    ],
    reviews : [
    {
        id: 1,
        name: 'susan smith',
        product: 'Smart Watch',
        image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        product: 'Smart Watch',
        image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        product: 'Smart Watch',
        image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        product: 'Smart Watch',
        image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    ]
};
export default data;
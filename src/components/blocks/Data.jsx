import { FaUserAlt } from 'react-icons/fa';
import { MdBookmark, MdRssFeed, MdSettings } from 'react-icons/md'
import { HiOutlinePhotograph, HiOutlineBookmark } from "react-icons/hi";

import user from '../../assets/images/user.png'
import lady from '../../assets/images/user2.png'


export const MenuData = [
  {
        icon: <MdRssFeed />,
        title: 'Feed',
      class: 'active',
  },
  {
        icon: <HiOutlinePhotograph/>,
      title: 'Gallery',
  },
  {
        icon: <MdSettings/>,
      title: 'Settings',
  },
  {
        icon: <FaUserAlt/>,
      title: 'Referral',
  },
  {
        icon: <MdBookmark/>,
      title: 'Saved',
  },
];


export const UserPages = [
    {
        image: user,
        name: 'Business Name',
        page: 'Business Page'

    },
    {
        image: user,
        name: 'Business Name',
        page: 'Business Page'

    },
    {
        image: user,
        name: 'Business Name',
        page: 'Business Page'

    },
    {
        image: user,
        name: 'Business Name',
        page: 'Business Page'

    },
    {
        image: user,
        name: 'Business Name',
        page: 'Business Page'

    },
]

export const SuggestedListing = [
    {
        image: lady,
        name: 'Smoothie',
        store: 'Smoothy store',
        button: 'Order',
        orderLeft: '25 Oders Left',
        progress: {bgcolor: "#FBB03B", completed: 60}
    },
    {
        image: lady,
        name: 'Smoothie',
        store: 'Smoothy store',
        button: 'Order',
        orderLeft: '25 Oders Left',
        progress: {bgcolor: "#FBB03B", completed: 60}
    },
    {
        image: lady,
        name: 'Smoothie',
        store: 'Smoothy store',
        button: 'Order',
        orderLeft: '25 Oders Left',
        progress: {bgcolor: "#FBB03B", completed: 60}
    },
    {
        image: lady,
        name: 'Smoothie',
        store: 'Smoothy store',
        button: 'Order',
        orderLeft: '25 Oders Left',
        progress: {bgcolor: "#FBB03B", completed: 60}
    },
]


export const SuggestedUsers = [
    {
        image: lady,
        name: 'Rose Kooto',
        place: 'Abuja',
        button: 'Support',
        icon: <HiOutlineBookmark />,
    },
    {
        image: lady,
        name: 'Rose Kooto',
        place: 'Abuja',
        button: 'Support',
        icon: <HiOutlineBookmark />,
    },
    {
        image: lady,
        name: 'Rose Kooto',
        place: 'Abuja',
        button: 'Support',
        icon: <HiOutlineBookmark />,
    },
    {
        image: lady,
        name: 'Rose Kooto',
        place: 'Abuja',
        button: 'Support',
        icon: <HiOutlineBookmark />,
    },
    {
        image: lady,
        name: 'Rose Kooto',
        place: 'Abuja',
        button: 'Support',
        icon: <HiOutlineBookmark />,
    },
    {
        image: lady,
        name: 'Rose Kooto',
        place: 'Abuja',
        button: 'Support',
        icon: <HiOutlineBookmark />,
    },
]
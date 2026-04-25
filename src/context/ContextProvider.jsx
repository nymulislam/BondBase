'use client'

import { useState } from 'react';
import { friendContext } from './FriendContext';

const ContextProvider = ({ children }) => {
    const [friendCheckIn, setFriendCheckIn] = useState([])
    const [filter, setFilter] = useState('View all')

    return (
        <friendContext.Provider value={{friendCheckIn, setFriendCheckIn, filter, setFilter}}>
            {children}
        </friendContext.Provider>
    );
};

export default ContextProvider;
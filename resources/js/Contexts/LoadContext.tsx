import React, { createContext, useContext, useState } from 'react';

interface LoadContextType {
    localStaff: Record<string, number>;
    changeStaff: (id: string, value: number) => void;
    setAllStaff: (staffData: Record<string, number>) => void;
}

const LoadContext = createContext<LoadContextType | undefined>(undefined);

export const LoadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [localStaff, setLocalStaff] = useState<Record<string, number>>({});

    const changeStaff = (id: string, value: number) => {
        setLocalStaff(prev => ({ ...prev, [id]: Math.max(0, value) }));
    };

    return (
        <LoadContext.Provider value={{ localStaff, changeStaff, setAllStaff: setLocalStaff }}>
            {children}
        </LoadContext.Provider>
    );
};

export const useLoadContext = () => {
    const context = useContext(LoadContext);
    if (!context) throw new Error("useLoadContext must be used within LoadProvider");
    return context;
};
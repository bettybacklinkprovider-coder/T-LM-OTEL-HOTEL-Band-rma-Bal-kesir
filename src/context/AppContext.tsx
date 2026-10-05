import React, { createContext, useContext, useState } from 'react';

type Language = 'tr' | 'en';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isBookingOpen: boolean;
  selectedRoomId: string | null;
  openBooking: (roomId?: string) => void;
  closeBooking: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('tr'); // Default Turkish for authentic feel
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const openBooking = (roomId?: string) => {
    if (roomId) setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoomId(null);
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        isBookingOpen,
        selectedRoomId,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

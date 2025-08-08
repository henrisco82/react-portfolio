import { useLayoutEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

const CalendlyPopupButton = () => {
    const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const root = document.getElementById('root');
        if (root) setRootEl(root);
    }, []);

    if (!rootEl) return null;

    return (
        <PopupButton
            url={import.meta.env.VITE_CALENDLY_URL}
            rootElement={rootEl}
            text="Book a Meeting"
            styles={{
                padding: '9px 88px',
                backgroundColor: 'rgb(169, 91, 126)',
                color: '#fff',
                borderRadius: '8px',
                fontWeight: 'bold',
                marginTop: '16px',
            }}
        />
    );
};

export default CalendlyPopupButton;

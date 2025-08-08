import { PopupButton } from 'react-calendly';

const CalendlyPopupButton = () => (
    <PopupButton
        url={import.meta.env.VITE_CALENDLY_URL}
        rootElement={document.getElementById('root')!}
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

export default CalendlyPopupButton;

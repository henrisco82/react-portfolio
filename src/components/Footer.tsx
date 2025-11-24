const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground py-4 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    Copyright ©{' '}
                    <a
                        href="https://www.henryunah.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-foreground transition-colors"
                    >
                        Henry Unah
                    </a>
                </p>
            </div>
        </footer>

    );
};

export default Footer;
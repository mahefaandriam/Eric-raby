import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-white py-4">
            <div className="grid grid-cols-2">
                <div className="relative flex justify-center col-span-2 bg-white h-20 py-3">
                    <a
                        href="#home"
                        className="text-black/50 mx-5 font-medium text-xs transition duration-300"
                    >
                        {t('footer_section.home')}
                    </a>
                    <a
                        href="#about"
                        className="text-black/50 mx-5 font-medium text-xs transition duration-300"
                    >
                        {t('footer_section.about')}
                    </a>
                    <a
                        href="#interventions"
                        className="text-black/50 mx-5 font-medium text-xs transition duration-300"
                    >
                        {t('footer_section.interventions')}
                    </a>
                    <a
                        href="#contact"
                        className="text-black/50 mx-5 font-medium text-xs transition duration-300"
                    >                        
                        {t('footer_section.contact')}
                    </a>
                    <a
                        href="#faq"
                        className="text-black/50 mx-5 font-medium text-xs transition duration-300"
                    >                        
                        {t('footer_section.faq')}
                    </a>
                </div>
                <div className="relative flex justify-center col-span-1 bg-white">
                    <img
                        src="/qwam-logo.png"
                        alt="place image"
                        className="w-20 h-auto"
                    />
                    <div className="place-self-center mx-5 text-xs font-thin text-black/50">©2025</div>
                </div>
                <div className="relative  flex justify-center  col-span-1 bg-white">
                    <div className="place-self-center mx-5">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 text-primary hover:text-accent transition-colors duration-300">
                            <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-300 text-primary hover:text-accent transition-colors duration-300">
                            <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-300 text-primary hover:text-accent transition-colors duration-300">
                            <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
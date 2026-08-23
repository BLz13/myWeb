import LinkedinLogo from "../../assets/svg/linkedin.svg?react"
import MailLogo from "../../assets/svg/mail.svg?react"
import PhoneLogo from "../../assets/svg/phone.svg?react"
import PinLogo from "../../assets/svg/pin.svg?react"
import { TEXT } from "../../utils/data";

export default function Contact({ lang }) {

    const contact = TEXT?.contact?.[lang] ?? TEXT?.contact?.es ?? null;

    return (        
        <>
            <div>
                <PinLogo />
                <p>{contact.address.city}</p>
                <p>{contact.address.country}</p>
            </div>

            <div>
                <a href={contact.linkedin.value} target="_blank" >
                    <LinkedinLogo />
                </a>
                <a href={contact.linkedin.value} target="_blank" >
                    {contact.linkedin.id}
                </a>                
            </div>
            
            <div>
                <a href={`tel:+${contact.phone.number}`} target="_blank" >
                    <PhoneLogo />
                </a>
                <a href={`tel:+${contact.phone.number}`} target="_blank" >
                    {contact.phone.value}
                </a>                
            </div>
            
            <div>
                <a href={`mailto:${contact.email.value}`} target="_blank" >
                    <MailLogo />
                </a>
                <a href={`mailto:${contact.email.value}`} target="_blank" >
                    {contact.email.id}
                </a>                
            </div>
            
        </>
        
    );
}
export const redirectToWhatsApp = () => {
    const phoneNumber = "5531990851100";
    const message = "Gostaria de fazer um orçamento para meu site.";
    const desktopURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const mobileURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const isMobile = window.screen.width <= 768
    window.location.href = isMobile ? mobileURL : desktopURL;
}
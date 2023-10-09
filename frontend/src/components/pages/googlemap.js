const GoogleMap = (props) => {
    return (
    <div>
        <section id="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.8625414460025!2d6.004734691506293!3d47.258391137604946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d62fbecacc221%3A0x1b6fa8bdd3c83d0f!2s101%20Rue%20de%20Vesoul%2C%2025000%20Besan%C3%A7on!5e0!3m2!1sfr!2sfr!4v1696319227044!5m2!1sfr!2sfr&region=US&language=en" title="map" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
    );    
}
export default GoogleMap;
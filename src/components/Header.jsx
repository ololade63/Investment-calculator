export default function Header ({img, alt, heading}) {
    return(
        <header id="header">
            <img src={img} alt={alt}/>
            <h1>{heading}</h1>
        </header>
    )
}
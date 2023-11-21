const LogoCarousel = () => {
  const images = [
    "https://roborregos.com/static/media/itesm.a4d4335f9250cca78602.png",
    "https://roborregos.com/static/media/aws-logo.08dffd14eb0f47200a8c.png",
    "https://roborregos.com/static/media/mitutoyo.5d611af77b7801efbeb2.png",
    "https://roborregos.com/static/media/pedraza.73538cbcd363e19bb5bb.png",
    "https://roborregos.com/static/media/ATB.3a9660f7c69afa808573.png",
    "https://roborregos.com/static/media/noah-azul.aecd3abee75f7b58a1e8.svg",
  ];

  return (
    <div className="py-10 group flex flex-nowrap min-w-full overflow-hidden">
      <div className="flex shrink-0 animate-infinite-carousel group-hover:pause-animation">
        {images.map((image, index) => (
          <img
            className="object-scale-down w-52 mx-5"
            key={index}
            src={image}
            alt="logo"
          />
        ))}
      </div>
      <div className="flex shrink-0 animate-infinite-carousel group-hover:pause-animation">
        {images.map((image, index) => (
          <img
            className="object-scale-down w-52 mx-5"
            key={index}
            src={image}
            alt="logo"
          />
        ))}
      </div>
      <div className="flex shrink-0 animate-infinite-carousel group-hover:pause-animation">
        {images.map((image, index) => (
          <img
            className="object-scale-down w-52 mx-5"
            key={index}
            src={image}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

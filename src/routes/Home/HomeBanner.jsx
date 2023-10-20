import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '@splidejs/react-splide/css';

const HomeBanner = () => {
    const banner = useSelector((store) => store.banner);
  return (
    <>
        <Splide
            aria-label='My favorite image'
            hasTrack={false}
            options={{
                type: 'loop',
                perPage: 1,
                autoplay: true,
            }}
            >
            <div className="custom-wrapper">
                <SplideTrack>
                {banner?.map((item, index) => (
                    <SplideSlide key={index}>
                    <div className="carousel-container">
                        <div className="carousel-body">
                        <div className="blur">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <button type='button'>
                            <NavLink to='store'>Shop with us</NavLink>
                            </button>
                        </div>
                        <img src={item.img} alt={`banner-${index}`} loading='lazy' />
                        </div>
                    </div>
                    </SplideSlide>
                ))}
                </SplideTrack>
            </div>

            <div className="splide__progress">
                <div className="splide__progress__bar" />
            </div>
        </Splide>
    </>
  )
}

export default HomeBanner;
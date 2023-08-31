
import '../css/HOME.scss'
import React, { useEffect, useRef, useState } from 'react'
import { data } from '../JS/data';

export const Home = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <section className='section'>
            <h2 className='text'>Find the cheapest airline tickets on all airlines</h2>
        <div className="main-container">
            <div className="slider-container">
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            data.map((item) => {
                                return <li key={item.id}>
                                    <img src={item.imgUrl} width={1500} height={500} />
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="dots-container">
                    {
                        data.map((_, idx) => (
                            <div key={idx}
                                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                                onClick={() => goToSlide(idx)}>
                                &#9865;
                            </div>))
                    }
                </div>
            </div>
        </div >
        <section className='columna'>
        <div className="div">
            <img src="https://th.bing.com/th/id/OIP.pmc2JmR9XNQX0nlXXRt77wHaE5?pid=ImgDet&rs=1"  alt="imagen" className='img' />
            <h3>On-demand flexibility</h3>
            <p className='p1'>Create a trip perfectly tailored to your needs with flexible tickets, cancellation guarantee and a host of other services to choose from to protect your flights and plan freely.</p>
        </div>
        <div className="div">
            <img src="https://th.bing.com/th/id/OIP.f4udkwBvjQGKM7jMHH6XawHaEK?pid=ImgDet&rs=1" alt="imagen" className='img' />
            <h3>Easy to manage</h3>
            <p className='p1'>Log in to "My Reservations" and discover a world of travel opportunities. Manage your trips, add what you need from our service menu, get flight information or updates on your refunds... All this and more in "My Reservations".</p>
        </div>
        <div className="div">
            <img src="https://alkilautos.com/blog/wp-content/uploads/2018/05/18.05.03-Destinos-internacionales-m%C3%A1s-baratos-para-viajar-Amigos-1024x683.jpg" alt="imagen" className='img' />
            <h3>Travel can be easier</h3>
            <p className='p1'>Book your next flight on the go with the Gotogate app! Save your booking details, check in quickly and enjoy exclusive offers. Because traveling can be easier.</p>
        </div>
        </section>
</section>

    )
}









export default Home;

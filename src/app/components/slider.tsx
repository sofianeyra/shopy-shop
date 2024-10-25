"use client";
import { useEffect } from 'react';
import { Carousel } from 'flowbite';

export default function Slider() {
    useEffect(() => {
        // Solo ejecuta el código en el cliente
        if (typeof document !== 'undefined') {
            const carouselElement = document.getElementById('default-carousel');

            const items = [0, 1, 2]
                .map((i) => document.getElementById(`carousel-item-${i + 1}`))
                .filter((el): el is HTMLElement => el !== null)
                .map((el, index) => ({
                    position: index,
                    el: el,
                }));

            const options = {
                defaultPosition: 1,
                interval: 3000,
                indicators: {
                    activeClasses: 'bg-white dark:bg-gray-800',
                    inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                    items: [0, 1, 2]
                        .map((i) => document.getElementById(`carousel-indicator-${i + 1}`))
                        .filter((el): el is HTMLElement => el !== null)
                        .map((el, index) => ({
                            position: index,
                            el: el,
                        })),
                },
            };

            if (carouselElement && items.length) {
                new Carousel(carouselElement, items, options);
            }

            const instanceOptions = { id: 'default-carousel', override: true };

            if (carouselElement && items.length) {
                new Carousel(carouselElement, items, options, instanceOptions);
            }
        }
    }, []); // No hay dependencias

    return (
        <div>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative custom-height overflow-hidden rounded-lg">
                    <div id='carousel-item-1' className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."
                            src="/store.jpg"
                        />
                    </div>
                    <div id='carousel-item-2' className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."
                            src="/store.jpg"
                        />
                    </div>
                    <div id='carousel-item-3' className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."
                            src="/store.jpg"
                        />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                <button id="data-carousel-prev" type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button id="data-carousel-next" type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}

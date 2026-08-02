// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Initialize Swup
const swup = new Swup();

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.custom-cursor-follower');

if (cursor && follower && window.matchMedia("(min-width: 900px)").matches) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const addHover = () => {
        cursor.classList.add('hover');
        follower.classList.add('hover');
    };
    const removeHover = () => {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
    };

    window.attachCursorEvents = function() {
        document.querySelectorAll('a, button, .menu-toggle, .close-video-modal').forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });
    }
}

// Page Logic (needs to run on initial load and after swup transition)
function initPage() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        // Clone and replace to avoid multiple listeners
        const newToggle = menuToggle.cloneNode(true);
        menuToggle.parentNode.replaceChild(newToggle, menuToggle);
        
        newToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = newToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // GSAP Scroll Reveals
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        document.querySelectorAll('.reveal').forEach((elem) => {
            gsap.fromTo(elem, {
                y: 40,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }

    // Video Modal Logic
    const videoModal = document.getElementById('videoModal');
    let modalVideoPlayer = document.getElementById('modalVideoPlayer');
    let closeVideoModal = document.querySelector('.close-video-modal');
    const watchTrailerBtns = document.querySelectorAll('.watch-trailer-btn');

    if (videoModal && modalVideoPlayer && closeVideoModal) {
        // Reset listeners on modal elements by cloning
        const newClose = closeVideoModal.cloneNode(true);
        closeVideoModal.parentNode.replaceChild(newClose, closeVideoModal);
        
        const newModal = videoModal.cloneNode(true);
        videoModal.parentNode.replaceChild(newModal, videoModal);
        
        closeVideoModal = newClose;
        modalVideoPlayer = document.getElementById('modalVideoPlayer'); // re-grab from dom

        const closeModal = () => {
            newModal.style.display = 'none';
            modalVideoPlayer.pause();
            modalVideoPlayer.src = '';
        };

        watchTrailerBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const videoSrc = btn.getAttribute('data-video');
                if (videoSrc) {
                    modalVideoPlayer.src = videoSrc;
                    newModal.style.display = 'flex';
                    modalVideoPlayer.play();
                }
            });
        });

        closeVideoModal.addEventListener('click', closeModal);
        newModal.addEventListener('click', (e) => {
            if (e.target === newModal) {
                closeModal();
            }
        });
    }

    // Kinetic Typography & Dynamic Gallery Logic
    const kineticContainer = document.querySelector('.kinetic-container');
    if (kineticContainer && typeof gsap !== 'undefined') {
        const kineticHero = document.querySelector('.kinetic-hero');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        kineticHero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            // Calculate mouse position relative to center (-1 to 1)
            const xPos = (clientX / innerWidth - 0.5) * 2;
            const yPos = (clientY / innerHeight - 0.5) * 2;
            
            // gsap.to(kineticContainer, {
            //     rotationY: xPos * 15,
            //     rotationX: -yPos * 15,
            //     x: xPos * 30,
            //     y: yPos * 30,
            //     ease: "power2.out",
            //     duration: 1
            // });
            
            // Animate dynamic gallery items with parallax
            galleryItems.forEach(item => {
                const speed = parseFloat(item.getAttribute('data-speed')) || 1;
                gsap.to(item, {
                    x: xPos * -80 * speed,
                    y: yPos * -80 * speed,
                    rotationX: yPos * 10 * speed,
                    rotationY: xPos * -10 * speed,
                    ease: "power2.out",
                    duration: 1.5
                });
            });
        });
        
        kineticHero.addEventListener('mouseleave', () => {
            // gsap.to(kineticContainer, {
            //     rotationY: 0,
            //     rotationX: 0,
            //     x: 0,
            //     y: 0,
            //     ease: "power2.out",
            //     duration: 1.5
            // });
            
            gsap.to(galleryItems, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                ease: "power2.out",
                duration: 2
            });
        });
        const allImageSources = Array.from(galleryItems).map(img => img.src);
        
        // Independent random fading for each image
        galleryItems.forEach(item => {
            // Set initial opacity so they all start visible
            let initialOpacity = 0.4;
            if (item.classList.contains('size-md')) initialOpacity = 0.6;
            if (item.classList.contains('size-lg')) initialOpacity = 0.9;
            gsap.set(item, { opacity: initialOpacity + (Math.random() * 0.1 - 0.05) });

            const animateRandomly = () => {
                const shouldShow = Math.random() > 0.1; // 90% chance to show
                if (shouldShow) {
                    const durationIn = 0.5 + Math.random() * 0.5;
                    const stayTime = 1.0 + Math.random() * 1.0; // Stay visible for 1.0 to 2.0 seconds
                    const durationOut = 0.5 + Math.random() * 0.5;
                    
                    const tl = gsap.timeline({
                        onComplete: () => {
                            // Swap to a random different image when faded out
                            const randomSrc = allImageSources[Math.floor(Math.random() * allImageSources.length)];
                            item.src = randomSrc;
                            setTimeout(animateRandomly, Math.random() * 300); // hidden for 0 to 0.3 seconds
                        }
                    });
                    
                    // target opacity based on size
                    let targetOpacity = 0.4;
                    if (item.classList.contains('size-md')) targetOpacity = 0.6;
                    if (item.classList.contains('size-lg')) targetOpacity = 0.9;

                    tl.to(item, { opacity: targetOpacity + (Math.random() * 0.1 - 0.05), duration: durationIn, ease: "power1.inOut" }, 0)
                      .to(item, { opacity: targetOpacity + (Math.random() * 0.1 - 0.05), duration: stayTime }, durationIn)
                      .to(item, { opacity: 0, duration: durationOut, ease: "power1.inOut" }, durationIn + stayTime);
                      
                    // Add subtle lateral drifting from left to right or right to left
                    gsap.fromTo(item, 
                        { xPercent: 0 },
                        { 
                            xPercent: (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 15),
                            duration: durationIn + stayTime + durationOut,
                            ease: "linear"
                        }
                    );
                } else {
                    setTimeout(animateRandomly, 100 + Math.random() * 200); // Wait 0.1 to 0.3 seconds before trying again
                }
            };
            setTimeout(animateRandomly, Math.random() * 1000); // Start quickly
        });
    }

    // Hero Video Player Logic (YouTube Embed)
    const heroPortfolioBtn = document.getElementById('hero-portfolio-btn');
    const heroVideoContainer = document.getElementById('hero-video-player-container');
    const heroYoutubeIframe = document.getElementById('heroYoutubeIframe');
    const heroVideoCloseBtn = document.getElementById('hero-video-close-btn');
    const heroKineticContainer = document.querySelector('.kinetic-container');
    const heroGallery = document.getElementById('hero-gallery');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (heroPortfolioBtn && heroVideoContainer) {
        const openHeroVideo = (e) => {
            if (e) e.preventDefault();
            
            // Fade out Rodney Costa title & background gallery images
            if (heroKineticContainer) {
                heroKineticContainer.style.opacity = '0';
                heroKineticContainer.style.pointerEvents = 'none';
                heroKineticContainer.style.transform = 'scale(0.95)';
                setTimeout(() => { if (heroVideoContainer.classList.contains('active')) heroKineticContainer.style.visibility = 'hidden'; }, 400);
            }
            if (heroGallery) {
                heroGallery.style.opacity = '0';
                heroGallery.style.pointerEvents = 'none';
                setTimeout(() => { if (heroVideoContainer.classList.contains('active')) heroGallery.style.visibility = 'hidden'; }, 400);
            }
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            }

            // Set YouTube iframe src to start playing
            if (heroYoutubeIframe) {
                const targetSrc = heroYoutubeIframe.getAttribute('data-src');
                if (targetSrc) heroYoutubeIframe.src = targetSrc;
            }

            // Fade in Hero Video Container
            heroVideoContainer.style.visibility = 'visible';
            heroVideoContainer.classList.add('active');
        };

        const closeHeroVideo = () => {
            // Reset iframe src to stop video
            if (heroYoutubeIframe) {
                heroYoutubeIframe.src = '';
            }
            heroVideoContainer.classList.remove('active');

            // Restore Rodney Costa title & background gallery images
            if (heroKineticContainer) {
                heroKineticContainer.style.visibility = 'visible';
                heroKineticContainer.style.opacity = '1';
                heroKineticContainer.style.pointerEvents = 'auto';
                heroKineticContainer.style.transform = 'scale(1)';
            }
            if (heroGallery) {
                heroGallery.style.visibility = 'visible';
                heroGallery.style.opacity = '1';
                heroGallery.style.pointerEvents = 'auto';
            }
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        };

        heroPortfolioBtn.addEventListener('click', openHeroVideo);
        if (heroVideoCloseBtn) heroVideoCloseBtn.addEventListener('click', closeHeroVideo);
    }

    // Contact Form AJAX Handler using Virtue Cloudflare Worker endpoint
    const contactForm = document.getElementById('contactForm');
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');
    const contactFormStatus = document.getElementById('contactFormStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const fname = document.getElementById('fname')?.value || '';
            const lname = document.getElementById('lname')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const subject = document.getElementById('subject')?.value || '';
            const message = document.getElementById('message')?.value || '';

            const name = `${fname} ${lname}`.trim();

            if (contactSubmitBtn) {
                contactSubmitBtn.disabled = true;
                contactSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            }
            if (contactFormStatus) {
                contactFormStatus.style.display = 'none';
            }

            try {
                const response = await fetch("https://vfxm-license-worker.virtuecreativesystems.workers.dev/v1/contact/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, subject, message, targetEmail: "rodney@florenciodacosta.com" }),
                });

                const data = await response.json().catch(() => ({}));

                if (response.ok) {
                    if (contactFormStatus) {
                        contactFormStatus.style.display = 'block';
                        contactFormStatus.style.background = 'rgba(46, 204, 113, 0.2)';
                        contactFormStatus.style.color = '#2ecc71';
                        contactFormStatus.style.border = '1px solid #2ecc71';
                        contactFormStatus.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.';
                    }
                    contactForm.reset();
                } else {
                    throw new Error(data.error || data.message || 'Failed to send message.');
                }
            } catch (err) {
                if (contactFormStatus) {
                    contactFormStatus.style.display = 'block';
                    contactFormStatus.style.background = 'rgba(231, 76, 60, 0.2)';
                    contactFormStatus.style.color = '#e74c3c';
                    contactFormStatus.style.border = '1px solid #e74c3c';
                    contactFormStatus.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${err.message || 'Network error'}. You can email directly to <a href="mailto:rodney@florenciodacosta.com" style="color:#fff;text-decoration:underline;">rodney@florenciodacosta.com</a>`;
                }
            } finally {
                if (contactSubmitBtn) {
                    contactSubmitBtn.disabled = false;
                    contactSubmitBtn.innerHTML = 'Send Message';
                }
            }
        });
    }

    // Academics Dashboard Sidebar & Course Picker System
    initAcademicsDashboard();
    initStudentGallery();
    initWordTagCloudGallery();
    initWorkSubmenu();
    init3DTiltCards();
    initGalleryParticleCanvas();
    initMagneticFilterButtons();
    initWandaGallerySystem();

    if (window.attachCursorEvents) window.attachCursorEvents();
}

function initWandaGallerySystem() {
    initWandaSpatialCanvas();
}

function initWandaSpatialCanvas() {
    console.log("DEBUG: initWandaSpatialCanvas executing...");
    const viewport = document.getElementById('students-dynamic-viewport') || document.getElementById('wanda-spatial-viewport');
    const gallery = document.getElementById('students-hero-gallery') || document.getElementById('wanda-spatial-canvas');
    console.log("DEBUG: viewport:", viewport, "gallery:", gallery);
    if (gallery) {
        console.log("DEBUG: gallery details - id:", gallery.id, "tagName:", gallery.tagName, "children count:", gallery.children.length, "classes:", gallery.className);
    }
    if (!viewport || !gallery) {
        console.log("DEBUG: Exiting because viewport or gallery is missing.");
        return;
    }

    // Load dynamic items from localStorage if available
    const storedItems = localStorage.getItem('rodney_gallery_items');
    console.log("DEBUG: storedItems from localStorage:", storedItems);
    if (storedItems) {
        try {
            const items = JSON.parse(storedItems);
            if (items && items.length > 0) {
                gallery.innerHTML = '';
                items.forEach((item) => {
                    const card = document.createElement('div');
                    card.className = 'gallery-item size-md student-gallery-card';
                    card.setAttribute('data-filter', (item.class || 'general').toLowerCase().replace(/\s+/g, '-'));
                    card.setAttribute('data-title', item.title || '');
                    card.setAttribute('data-student', item.student || '');
                    card.setAttribute('data-course', `${item.class || ''} (${item.semester || ''})`);
                    card.setAttribute('data-img', item.img || '');
                    if (item.video) {
                        card.setAttribute('data-video', item.video);
                    }

                    let videoHtml = '';
                    if (item.video) {
                        videoHtml = `<video src="${item.video}" loop muted playsinline preload="none" class="gallery-card-video"></video>`;
                    }

                    card.innerHTML = `
                        <img src="${item.img}" alt="${item.title} - ${item.student}">
                        ${videoHtml}
                        <div class="video-fullscreen-icon" title="Maximize Video Cinema Reel"><i class="fas fa-expand"></i></div>
                        <div class="gallery-item-caption">
                            <span class="cap-student"><i class="fas fa-user-graduate"></i> ${item.student}</span>
                            <h4 class="cap-title">${item.title}</h4>
                            <p class="cap-task">Assignment: ${item.task || ''}</p>
                            <span class="cap-meta">${item.class || ''} • ${item.semester || ''} • ${item.institution || 'Clemson University'}</span>
                        </div>
                    `;
                    gallery.appendChild(card);
                });
            }
        } catch (e) {
            console.error("Error loading gallery items from localStorage", e);
        }
    }

    const cardsArray = Array.from(gallery.querySelectorAll('.student-gallery-card'));
    const reelModal = document.getElementById('wanda-cinema-reel-modal');
    console.log("DEBUG: cardsArray length:", cardsArray.length);
    console.log("DEBUG: reelModal element:", reelModal);
    const reelCloseBtn = document.getElementById('wanda-reel-close-btn');
    const reelPrevBtn = document.getElementById('wanda-reel-prev');
    const reelNextBtn = document.getElementById('wanda-reel-next');
    const reelImg = document.getElementById('wanda-reel-img');
    const reelTitle = document.getElementById('wanda-reel-title');
    const reelStudent = document.getElementById('wanda-reel-student');
    const reelBadge = document.getElementById('wanda-reel-badge');
    const filmstripTrack = document.getElementById('wanda-filmstrip-track');

    if (cardsArray.length === 0) {
        console.log("DEBUG: Exiting because cardsArray is empty!");
        return;
    }

    let currentReelIndex = 0;

    // Reset card inline styles to let them flow in standard CSS Grid
    cardsArray.forEach((card, idx) => {
        card.style.position = '';
        card.style.width = '';
        card.style.height = '';
        card.style.left = '';
        card.style.top = '';
        card.style.transform = '';
        card.style.opacity = '';

        // Click directly opens cinema modal
        card.addEventListener('click', (e) => {
            console.log("DEBUG: Card clicked! Index:", idx, "card elements:", card);
            currentReelIndex = idx;
            populateWandaReel(currentReelIndex);
            if (reelModal) {
                console.log("DEBUG: Setting reelModal to display:flex and active.");
                reelModal.style.display = 'flex';
                requestAnimationFrame(() => {
                    reelModal.classList.add('active');
                    console.log("DEBUG: added active class to reelModal. classList:", reelModal.className);
                });
            } else {
                console.log("DEBUG: Warning: reelModal element not found during click!");
            }
        });

        // Hover plays video preview
        const video = card.querySelector('.gallery-card-video, .wanda-tile-video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch(() => {});
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    function populateWandaReel(index) {
        if (index < 0) index = cardsArray.length - 1;
        if (index >= cardsArray.length) index = 0;
        currentReelIndex = index;

        const card = cardsArray[currentReelIndex];
        const img = card.getAttribute('data-img');
        const videoUrl = card.getAttribute('data-video');
        const title = card.getAttribute('data-title');
        const student = card.getAttribute('data-student');
        const course = card.getAttribute('data-course');

        const reelVideo = document.getElementById('wanda-reel-video');
        const reelFsToggle = document.getElementById('wanda-reel-fs-toggle');

        if (videoUrl) {
            if (reelImg) reelImg.style.display = 'none';
            if (reelVideo) {
                reelVideo.style.display = 'block';
                reelVideo.src = videoUrl;
                reelVideo.play().catch(() => {});
            }
            if (reelFsToggle) {
                reelFsToggle.style.display = 'inline-flex';
                reelFsToggle.onclick = () => {
                    if (reelVideo.requestFullscreen) reelVideo.requestFullscreen();
                    else if (reelVideo.webkitRequestFullscreen) reelVideo.webkitRequestFullscreen();
                    else if (reelVideo.msRequestFullscreen) reelVideo.msRequestFullscreen();
                };
            }
        } else {
            if (reelVideo) {
                reelVideo.pause();
                reelVideo.style.display = 'none';
                reelVideo.src = '';
            }
            if (reelFsToggle) reelFsToggle.style.display = 'none';
            if (reelImg) {
                reelImg.style.display = 'block';
                reelImg.src = img;
            }
        }

        if (reelTitle) reelTitle.textContent = title;
        if (reelStudent) reelStudent.innerHTML = `<i class="fas fa-user-graduate"></i> ${student}`;
        if (reelBadge) reelBadge.textContent = course || 'DPA Showcase';

        if (filmstripTrack) {
            const items = filmstripTrack.querySelectorAll('.wanda-filmstrip-item');
            items.forEach((item, idx) => {
                if (idx === currentReelIndex) {
                    item.classList.add('active');
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }

    function buildFilmstrip() {
        if (!filmstripTrack) return;
        filmstripTrack.innerHTML = '';

        cardsArray.forEach((card, idx) => {
            const img = card.getAttribute('data-img');
            const title = card.getAttribute('data-title');

            const item = document.createElement('div');
            item.className = `wanda-filmstrip-item ${idx === currentReelIndex ? 'active' : ''}`;
            item.innerHTML = `
                <img src="${img}" alt="${title}">
                <div class="filmstrip-caption">${title}</div>
            `;

            item.addEventListener('click', () => {
                populateWandaReel(idx);
            });

            filmstripTrack.appendChild(item);
        });
    }

    buildFilmstrip();

    if (reelCloseBtn) {
        reelCloseBtn.addEventListener('click', () => {
            if (reelModal) {
                reelModal.classList.remove('active');
                setTimeout(() => { reelModal.style.display = 'none'; }, 350);
            }
            const reelVideo = document.getElementById('wanda-reel-video');
            if (reelVideo) {
                reelVideo.pause();
                reelVideo.src = '';
            }
        });
    }

    if (reelPrevBtn) {
        reelPrevBtn.addEventListener('click', () => populateWandaReel(currentReelIndex - 1));
    }

    if (reelNextBtn) {
        reelNextBtn.addEventListener('click', () => populateWandaReel(currentReelIndex + 1));
    }

    // Touch Swipe/Flick gestures inside modal for easy mobile slide viewing
    if (reelModal) {
        let touchStartX = 0;
        let touchEndX = 0;
        reelModal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        reelModal.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diffX = touchEndX - touchStartX;
            if (Math.abs(diffX) > 50) {
                if (diffX < 0) {
                    populateWandaReel(currentReelIndex + 1); // Swipe Left -> Next
                } else {
                    populateWandaReel(currentReelIndex - 1); // Swipe Right -> Prev
                }
            }
        }, { passive: true });
    }

    // Category Filter Buttons
    const filterBtns = document.querySelectorAll('.wanda-filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = btn.getAttribute('data-filter');
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                cardsArray.forEach(card => {
                    const cat = (card.getAttribute('data-filter') || card.getAttribute('data-category') || '').toLowerCase();
                    if (filter === 'all' || cat.includes(filter.toLowerCase())) {
                        card.style.display = 'block';
                        if (window.gsap) {
                            gsap.fromTo(card, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
                        }
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

function initGalleryParticleCanvas() {
    const canvas = document.getElementById('gallery-particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.offsetWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight;

    window.addEventListener('resize', () => {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    });

    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2.5 + 1,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.6 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(231, 76, 60, ${p.alpha})`;
            ctx.fill();

            // Connect nearby particles with glowing lines
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(231, 76, 60, ${0.15 * (1 - dist / 110)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

function initMagneticFilterButtons() {
    const btns = document.querySelectorAll('.magnetic-btn, .magnetic-chip');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

function init3DTiltCards() {
    const cards = document.querySelectorAll('.modern-gallery-card');
    if (cards.length === 0) return;

    cards.forEach(card => {
        if (!card.querySelector('.modern-card-glare')) {
            const glare = document.createElement('div');
            glare.className = 'modern-card-glare';
            card.appendChild(glare);
        }

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

function initWorkSubmenu() {
    const workTabs = document.querySelectorAll('.work-tab-btn');
    if (workTabs.length === 0) return;

    workTabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target-section');
            const targetSection = document.getElementById(targetId);

            workTabs.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            if (targetSection) {
                if (window.lenis) {
                    window.lenis.scrollTo(targetSection, { offset: -100 });
                } else {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function initWordTagCloudGallery() {
    const categoryTabs = document.querySelectorAll('.category-tab-btn');
    const chipTags = document.querySelectorAll('.chip-tag');
    const modernCards = document.querySelectorAll('.modern-gallery-card');
    const resetButton = document.getElementById('reset-modern-filters');

    if (modernCards.length === 0) return;

    let activeCategory = 'all';
    let activeTag = 'all';

    function updateGalleryFilter() {
        modernCards.forEach(card => {
            const cardTags = (card.getAttribute('data-tags') || '').toLowerCase();

            let matchesCat = (activeCategory === 'all');
            if (activeCategory === 'technique') matchesCat = cardTags.includes('technique-');
            else if (activeCategory === 'course') matchesCat = cardTags.includes('course-');
            else if (activeCategory === 'creator') matchesCat = cardTags.includes('creator-');

            let matchesTag = (activeTag === 'all') || cardTags.includes(activeTag.toLowerCase());

            if (matchesCat && matchesTag) {
                card.classList.remove('is-hidden');
                card.classList.add('is-visible');
                if (window.gsap) {
                    gsap.fromTo(card, { opacity: 0, scale: 0.94, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' });
                }
            } else {
                card.classList.remove('is-visible');
                card.classList.add('is-hidden');
            }
        });
        window.dispatchEvent(new Event('galleryFilterUpdated'));
    }

    // Category Tabs Logic
    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            if (tab.id === 'reset-modern-filters') return;

            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const cat = tab.getAttribute('data-category');
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                activeCategory = cat;

                // Show relevant chips
                chipTags.forEach(chip => {
                    const chipCat = chip.getAttribute('data-cat');
                    if (cat === 'all' || !chipCat || chipCat === cat || chip.getAttribute('data-tag') === 'all') {
                        chip.style.display = 'inline-block';
                    } else {
                        chip.style.display = 'none';
                    }
                });

                updateGalleryFilter();
            });
        });
    }

    // Chips Logic
    if (chipTags.length > 0) {
        chipTags.forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.preventDefault();
                chipTags.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeTag = chip.getAttribute('data-tag');
                updateGalleryFilter();
            });
        });
    }

    // Reset Button Logic
    if (resetButton) {
        resetButton.addEventListener('click', (e) => {
            e.preventDefault();
            activeCategory = 'all';
            activeTag = 'all';

            categoryTabs.forEach(t => t.classList.remove('active'));
            const allCat = document.querySelector('.category-tab-btn[data-category="all"]');
            if (allCat) allCat.classList.add('active');

            chipTags.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'inline-block';
            });
            const allChip = document.querySelector('.chip-tag[data-tag="all"]');
            if (allChip) allChip.classList.add('active');

            updateGalleryFilter();
        });
    }

    // Interactive Lightbox & Full-Screen Overlay System
    const modal = document.getElementById('student-work-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');

    const fsOverlay = document.getElementById('fullscreen-view-overlay');
    const fsCloseBtn = document.getElementById('fs-close-btn');
    const fsPrevBtn = document.getElementById('fs-prev-btn');
    const fsNextBtn = document.getElementById('fs-next-btn');
    const fsOpenBtn1 = document.getElementById('open-fullscreen-view-btn');
    const fsOpenBtn2 = document.getElementById('open-fullscreen-view-btn-2');

    let currentIndex = 0;
    const cardsArray = Array.from(modernCards);

    function populateModal(index) {
        if (index < 0) index = cardsArray.length - 1;
        if (index >= cardsArray.length) index = 0;
        currentIndex = index;

        const card = cardsArray[currentIndex];
        const img = card.getAttribute('data-img');
        const title = card.getAttribute('data-title');
        const student = card.getAttribute('data-student');
        const semester = card.getAttribute('data-semester');
        const course = card.getAttribute('data-course');
        const tools = card.getAttribute('data-tools');

        // Populate Standard Modal
        if (modal) {
            const mImg = document.getElementById('modal-img');
            const mTitle = document.getElementById('modal-title');
            const mStudent = document.getElementById('modal-student');
            const mSemester = document.getElementById('modal-semester');
            const mBadge = document.getElementById('modal-course-badge');
            const toolsContainer = document.getElementById('modal-tools-list');

            if (mImg) mImg.src = img;
            if (mTitle) mTitle.textContent = title;
            if (mStudent) mStudent.textContent = student;
            if (mSemester) mSemester.textContent = semester;
            if (mBadge) mBadge.textContent = course;

            if (toolsContainer) {
                toolsContainer.innerHTML = '';
                if (tools) {
                    tools.split(',').forEach(tool => {
                        const span = document.createElement('span');
                        span.className = 'modal-tool-badge';
                        span.textContent = tool.trim();
                        toolsContainer.appendChild(span);
                    });
                }
            }
        }

        // Populate Fullscreen Overlay
        if (fsOverlay) {
            const fsImg = document.getElementById('fs-image');
            const fsTitle = document.getElementById('fs-title');
            const fsStudent = document.getElementById('fs-student');
            const fsCourse = document.getElementById('fs-course');
            const fsCounter = document.getElementById('fs-counter');

            if (fsImg) fsImg.src = img;
            if (fsTitle) fsTitle.textContent = title;
            if (fsStudent) fsStudent.textContent = student;
            if (fsCourse) fsCourse.textContent = course;
            if (fsCounter) fsCounter.textContent = `${currentIndex + 1} of ${cardsArray.length}`;
        }
    }

    if (cardsArray.length > 0) {
        cardsArray.forEach((card, idx) => {
            card.addEventListener('click', () => {
                populateModal(idx);
                if (modal) modal.classList.add('active');
            });
        });

        // Modal Nav Arrows
        if (modalPrevBtn) {
            modalPrevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                populateModal(currentIndex - 1);
            });
        }

        if (modalNextBtn) {
            modalNextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                populateModal(currentIndex + 1);
            });
        }

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                if (modal) modal.classList.remove('active');
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }

        // Fullscreen Triggers
        const openFullscreen = () => {
            populateModal(currentIndex);
            if (fsOverlay) fsOverlay.classList.add('active');
        };

        if (fsOpenBtn1) fsOpenBtn1.addEventListener('click', openFullscreen);
        if (fsOpenBtn2) fsOpenBtn2.addEventListener('click', openFullscreen);

        const modalImg = document.getElementById('modal-img');
        if (modalImg) modalImg.addEventListener('click', openFullscreen);

        // Fullscreen Nav & Close
        if (fsCloseBtn) {
            fsCloseBtn.addEventListener('click', () => {
                if (fsOverlay) fsOverlay.classList.remove('active');
            });
        }

        if (fsPrevBtn) {
            fsPrevBtn.addEventListener('click', () => populateModal(currentIndex - 1));
        }

        if (fsNextBtn) {
            fsNextBtn.addEventListener('click', () => populateModal(currentIndex + 1));
        }

        if (fsOverlay) {
            fsOverlay.addEventListener('click', (e) => {
                if (e.target === fsOverlay) {
                    fsOverlay.classList.remove('active');
                }
            });
        }

        // Global Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            const isModalActive = modal && modal.classList.contains('active');
            const isFsActive = fsOverlay && fsOverlay.classList.contains('active');

            if (isModalActive || isFsActive) {
                if (e.key === 'ArrowLeft') {
                    populateModal(currentIndex - 1);
                } else if (e.key === 'ArrowRight') {
                    populateModal(currentIndex + 1);
                } else if (e.key === 'Escape') {
                    if (fsOverlay) fsOverlay.classList.remove('active');
                    if (modal) modal.classList.remove('active');
                }
            }
        });
    }
}

function initAcademicsDashboard() {
    const sidebarItems = document.querySelectorAll('.academic-sidebar .sidebar-item');
    const tabPanes = document.querySelectorAll('.academic-tab-pane');

    if (sidebarItems.length > 0 && tabPanes.length > 0) {
        sidebarItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = item.getAttribute('data-tab');
                sidebarItems.forEach(i => i.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                item.classList.add('active');
                const activePane = document.getElementById(targetTab);
                if (activePane) {
                    activePane.classList.add('active');
                }
            });
        });
    }

    const coursePills = document.querySelectorAll('.course-picker-pill');
    const courseCards = document.querySelectorAll('.course-card-pane');

    if (coursePills.length > 0 && courseCards.length > 0) {
        coursePills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const targetCourse = pill.getAttribute('data-course');
                coursePills.forEach(p => p.classList.remove('active'));
                courseCards.forEach(c => c.classList.remove('active'));

                pill.classList.add('active');
                const activeCourse = document.getElementById(targetCourse);
                if (activeCourse) {
                    activeCourse.classList.add('active');
                }
            });
        });
    }
}

function initStudentGallery() {
    const filterPills = document.querySelectorAll('.gallery-filter-pill');
    const semesterSelect = document.getElementById('gallery-semester-select');
    const searchInput = document.getElementById('gallery-student-search');
    const workCards = document.querySelectorAll('.student-work-card');

    if (workCards.length === 0) return;

    let activeCourseFilter = 'all';
    let activeSemesterFilter = 'all';
    let activeSearchQuery = '';

    function filterGallery() {
        workCards.forEach(card => {
            const course = card.getAttribute('data-course') || '';
            const semester = card.getAttribute('data-semester') || '';
            const student = (card.getAttribute('data-student') || '').toLowerCase();
            const title = (card.getAttribute('data-title') || '').toLowerCase();
            const tools = (card.getAttribute('data-tools') || '').toLowerCase();

            const matchesCourse = (activeCourseFilter === 'all') || course.includes(activeCourseFilter);
            const matchesSemester = (activeSemesterFilter === 'all') || (semester === activeSemesterFilter);
            const matchesSearch = !activeSearchQuery || 
                student.includes(activeSearchQuery) || 
                title.includes(activeSearchQuery) || 
                tools.includes(activeSearchQuery);

            if (matchesCourse && matchesSemester && matchesSearch) {
                card.style.display = 'flex';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    }

    if (filterPills.length > 0) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeCourseFilter = pill.getAttribute('data-course-filter');
                filterGallery();
            });
        });
    }

    if (semesterSelect) {
        semesterSelect.addEventListener('change', (e) => {
            activeSemesterFilter = e.target.value;
            filterGallery();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeSearchQuery = e.target.value.toLowerCase().trim();
            filterGallery();
        });
    }

    // Lightbox Modal Setup
    const modal = document.getElementById('student-work-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (modal && workCards.length > 0) {
        workCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.getAttribute('data-img');
                const title = card.getAttribute('data-title');
                const student = card.getAttribute('data-student');
                const semester = card.getAttribute('data-semester');
                const course = card.getAttribute('data-course');
                const tools = card.getAttribute('data-tools');

                document.getElementById('modal-img').src = img;
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-student').textContent = student;
                document.getElementById('modal-semester').textContent = semester;
                document.getElementById('modal-course-badge').textContent = course;

                const toolsContainer = document.getElementById('modal-tools-list');
                toolsContainer.innerHTML = '';
                if (tools) {
                    tools.split(',').forEach(tool => {
                        const span = document.createElement('span');
                        span.className = 'modal-tool-badge';
                        span.textContent = tool.trim();
                        toolsContainer.appendChild(span);
                    });
                }

                modal.classList.add('active');
            });
        });

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', initPage);

// Swup hooks
swup.hooks.on('page:view', initPage);
swup.hooks.on('visit:start', () => {
    // scroll to top on transition
    lenis.scrollTo(0, { immediate: true });
});

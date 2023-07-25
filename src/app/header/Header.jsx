import React, { useState } from 'react';
import './header.css';

function Header() {
	// change background
	window.addEventListener('scroll', () => {
		const header = document.querySelector('.header');
		if (window.scrollY >= 80) {
			header.classList.add('scroll-header');
		} else {
			header.classList.remove('scroll-header');
		}
	});

	// toggle menu
	const [toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState('#home');

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav-logo">
					&lt; kevin / &gt;
				</a>
				<div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
					<ul className="nav-list">
						<li className="nav-item">
							<a
								href="#home"
								onClick={() => setActiveNav('#home')}
								className={
									activeNav === '#home' ? 'nav-link active-link' : 'nav-link'
								}>
								<i className="uil uil-estate nav-icon" />
								Home
							</a>
						</li>

						<li className="nav-item">
							<a
								href="#about"
								onClick={() => setActiveNav('#about')}
								className={
									activeNav === '#about' ? 'nav-link active-link' : 'nav-link'
								}>
								<i className="uil uil-user nav-icon" />
								About
							</a>
						</li>

						<li className="nav-item">
							<a
								href="#skills"
								onClick={() => setActiveNav('#skills')}
								className={
									activeNav === '#skills' ? 'nav-link active-link' : 'nav-link'
								}>
								<i className="uil uil-file-alt nav-icon" />
								Skills
							</a>
						</li>

						<li className="nav-item">
							<a
								href="#portfolio"
								onClick={() => setActiveNav('#portfolio')}
								className={
									activeNav === '#portfolio'
										? 'nav-link active-link'
										: 'nav-link'
								}>
								<i className="uil uil-scenery nav-icon" />
								Portfolio
							</a>
						</li>

						<li className="nav-item">
							<a
								href="#contact"
								onClick={() => setActiveNav('#contact')}
								className={
									activeNav === '#contact' ? 'nav-link active-link' : 'nav-link'
								}>
								<i className="uil uil-message nav-icon" />
								Contact
							</a>
						</li>
					</ul>
					<button onClick={() => showMenu(!toggle)} type="button">
						<i className="uil uil-times nav-close" />
					</button>
				</div>
				<button
					className="nav-toggle"
					onClick={() => showMenu(!toggle)}
					type="button">
					<i className="uil uil-apps" />
				</button>
			</nav>
		</header>
	);
}

export default Header;

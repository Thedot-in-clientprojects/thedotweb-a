import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Coding for Deaf',
      subtitle: 'Website',
      href: "https://www.codingfordeaf.org/",
      src: '/images/portfolio/code.png',
      category: 'dev',
    },
    {
      title: 'The Coimbatore Social Club',
      subtitle: 'Website',
      href: 'https://thecoimbatoresocialclub.com/',
      src: '/images/portfolio/csc.png',
      category: 'dev',
    },
    {
      title: 'Rudra Cycle Mart',
      subtitle: 'Website',
      href: 'https://rudracyclemart.in/',
      src: '/images/portfolio/rudra.png',
      category: 'dev',
    },
    {
      title: 'the H World',
      subtitle: 'Branding & Digital Marketing',
      src: '/images/portfolio/hbrand.png',
      category: 'design',
    },
    {
      title: 'V Media Factory',
      subtitle: 'Logo Design',
      src: '/images/portfolio/v.png',
      category: 'design',
    },
    {
      title: 'The H World',
      subtitle: 'website',
      href: 'https://thehworld.in/',
      src: '/images/portfolio/h.png',
      category: 'dev',
    },
    {
      title: 'RK Bakery',
      subtitle: 'Branding',
      src: '/images/portfolio/rk.png',
      category: 'design',
    },
    {
      title: 'Annalakshmi',
      subtitle: 'Website',
      src: '/images/portfolio/anna.png',
      category: 'dev',
    },
    // {
    //   title: 'Colorful Art Work',
    //   subtitle: 'See Details',
    //   href: '/portfolio/portfolio-details',
    //   src: '/images/portfolio_5.jpeg',
    //   category: 'logo_design',
    // },
    // {
    //   title: 'Colorful Art Work',
    //   subtitle: 'See Details',
    //   href: '/portfolio/portfolio-details',
    //   src: '/images/portfolio_6.jpeg',
    //   category: 'web_design',
    // },
  ];
  const categoryMenu = [
    {
      title: 'Design & Branding',
      category: 'design',
    },
    
    {
      title: 'Web Development',
      category: 'dev',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      /> */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      /> */}
    </>
  );
}

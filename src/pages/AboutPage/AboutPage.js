import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ScrollToNext from '@components/ScrollToNext';

const AboutPage = (props, context) => {
    const {
        theme: {colorPrimary, colorHighlight, bgPrimary, textPrimary}
    } = context;

    return (
        <div className="about-page" style={{backgroundColor: bgPrimary}}>
            <style jsx="true">
                {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
            </style>
            <div className="content-grid">
                <h1 style={{color: colorPrimary}}>About</h1>
                <div className="about-wrapper">
                    <div className="about-content" style={{color: textPrimary}}>

                        <p>I started my career as an <span className="highlight">Android developer</span>, responsible
                            for the complete development lifecycle of the mobile applications including designing user
                            interface, preparing content, programming and debugging.
                            I've been part of small and large (distributed) teams, I understood how crucial
                            documentation, version control, and effective team communication are in terms of having a
                            sane workflow.</p>

                        <p>Today I'm working as a <span className="highlight">front-end web developer</span> and
                            reaching a personal milestone, which is feeling confident in both sides of the spectrum to
                            develop Web Apps from back to front alogn with their mobile counterparts.</p>

                        <p>I'm working in this area using HTML5, CSS3 and Javascript and <span
                            className="highlight">ReactJS</span> has become one of my favorite tools in web
                            development. React-Redux, Node.js, Django, Java, Android, AWS are the main tricks up my
                            sleeve.</p>

                        <p>In the near future, I'd like to take my JS and CSS3 skills to the next level
                            while learning more about UI/UX and <span
                                className="highlight">Progressive Web Apps(PWA)</span>.
                        </p>
                        <p className="text-emoji" style={{color: colorPrimary}}>
                            \ (•◡•) /
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToNext pageSelector=".contact-page"/>
        </div>
    );
};

AboutPage.contextTypes = {
    theme: PropTypes.any
};

export default AboutPage;

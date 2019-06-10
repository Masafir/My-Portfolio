/**
 * Npm import
 */
import React from 'react';
import styled from '@emotion/styled';

/**
 * Local import
 */
import octo from 'src/assets/images/octo.jpg';

/**
 * Code
 */
const ContentBLock = styled.div({
  background: 'black',
  color: '#cccccc',
});

const Home = () => (
  <ContentBLock>
    <div id="home" className="content">
      <section className="content-section">
        <h1 className="content-title">Titre</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis posuere massa, ac
          condimentum arcu iaculis a. Pellentesque sit amet viverra lacus, ac ultricies ipsum. Cras
          at elementum justo, ut convallis est.
        </p>

        <p className="center">
          <img src={octo} alt="Octo" className="content-img" />
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis posuere massa, ac
          condimentum arcu iaculis a. Pellentesque sit amet viverra lacus, ac ultricies ipsum. Cras
          at elementum justo, ut convallis est.
        </p>
      </section>
    </div>
  </ContentBLock>
);

/**
 * Export
 */
export default Home;

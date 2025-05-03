/**
 * Restful Sounds Components Library
 * A collection of reusable UI component generators to maintain consistency
 * across dynamically generated content.
 */

const RSComponents = (function() {
  /**
   * Creates a policy card element
   * @param {Object} data - Card data
   * @param {number} data.number - Policy section number
   * @param {string} data.title - Card title
   * @param {string} data.content - Card content text
   * @returns {HTMLElement} The created card element
   */
  function createPolicyCard({ number, title, content }) {
    const card = document.createElement('div');
    card.className = 'card policy-card';
    
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const badge = document.createElement('div');
    badge.className = 'badge-circle policy-number';
    badge.textContent = number;
    
    const heading = document.createElement('h3');
    heading.className = 'card-title';
    heading.textContent = title;
    
    const paragraph = document.createElement('p');
    paragraph.className = 'card-content';
    paragraph.textContent = content;
    
    // Assemble the card
    header.appendChild(badge);
    header.appendChild(heading);
    card.appendChild(header);
    card.appendChild(paragraph);
    
    return card;
  }
  
  /**
   * Creates a feature card element
   * @param {Object} data - Card data
   * @param {string} data.icon - Emoji or icon for the card
   * @param {string} data.title - Card title
   * @param {string} data.content - Card content text
   * @returns {HTMLElement} The created card element
   */
  function createFeatureCard({ icon, title, content }) {
    const card = document.createElement('div');
    card.className = 'card feature-card';
    
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const iconEl = document.createElement('div');
    iconEl.className = 'feature-icon';
    iconEl.textContent = icon;
    
    const heading = document.createElement('h3');
    heading.textContent = title;
    
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    
    // Assemble the card
    header.appendChild(iconEl);
    header.appendChild(heading);
    card.appendChild(header);
    card.appendChild(paragraph);
    
    return card;
  }

  /**
   * Renders policy cards into a container
   * @param {string} containerId - ID of the container element
   * @param {Array} policiesData - Array of policy objects
   */
  function renderPolicyCards(containerId, policiesData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    policiesData.forEach(policy => {
      const card = createPolicyCard(policy);
      container.appendChild(card);
    });
  }
  
  /**
   * Renders feature cards into a container
   * @param {string} containerId - ID of the container element
   * @param {Array} featuresData - Array of feature objects
   */
  function renderFeatureCards(containerId, featuresData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    featuresData.forEach(feature => {
      const card = createFeatureCard(feature);
      container.appendChild(card);
    });
  }
  
  return {
    createPolicyCard,
    createFeatureCard,
    renderPolicyCards,
    renderFeatureCards
  };
})();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RSComponents;
}

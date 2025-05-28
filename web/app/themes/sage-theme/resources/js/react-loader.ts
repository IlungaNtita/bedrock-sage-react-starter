import React from 'react';
import ReactDOM from 'react-dom';

// Define a type for our components
type ComponentModule = {
  default: React.ComponentType<any>;
};

// A mapping of component names to their dynamic import functions
const components: Record<string, () => Promise<ComponentModule>> = {
  HelloWorld: () => import('./components/HelloWorld'),
  // Add other components here, e.g.:
  // AnotherComponent: () => import('./components/AnotherComponent'),
};

document.addEventListener('DOMContentLoaded', () => {
  Object.keys(components).forEach(componentName => {
    // Find elements on the page that want to render this component
    // Elements should have a data-component attribute matching the componentName
    // e.g., <div data-component="HelloWorld"></div>
    const elements = document.querySelectorAll(`[data-component="${componentName}"]`);

    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        components[componentName]()
          .then(module => {
            const Component = module.default;
            ReactDOM.render(React.createElement(Component), element);
          })
          .catch(error => {
            console.error(`Error loading component ${componentName}:`, error);
          });
      }
    });
  });
});
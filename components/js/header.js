class Header extends HTMLElement {
    constructor() {
      super();
    }
  


    connectedCallback() {


        fetch('/components/header.html')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text(); // or response.json() if it's a JSON file
        })
        .then(data => {
          console.log('Document content:', data);
          // Further processing of the document content
        
          var globalData = data;
          this.innerHTML = globalData;
        
        })
        .catch(error => {
          console.error('There was a problem fetching the document:', error);
        });


      
    }
  }
  
  customElements.define('header-component', Header);
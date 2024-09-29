import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "./Widget";

// Function to create the iframe and inject it into the host page
const createIframeAndInjectWidget = () => {
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.bottom = "0";
  iframe.style.right = "0";
  iframe.style.width = "400px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  document.body.appendChild(iframe);

  // Wait for the iframe to load before rendering React component
  iframe.onload = () => {
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDocument) {
      const widgetContainer = iframeDocument.createElement("div");
      iframeDocument.body.appendChild(widgetContainer);

      // Render the widget inside the iframe
      ReactDOM.createRoot(widgetContainer).render(
        <React.StrictMode>
          <Widget />
        </React.StrictMode>
      );
    }
  };
};

// Call the function to inject the widget
createIframeAndInjectWidget();

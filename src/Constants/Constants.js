const CONSTANTS = {
  UI: {
    TEXT_FIELD_TYPE: "text",
    CROSS_ICON: "fas fa-times fa-lg",
    TEXT_FIELD_PLACEHOLDER: "e.g. Anderson Brown",
    IMAGE_UN_AVAILABLE: "Not Available",
  },
  NAMES: {},
  DATA: {
    USER_DATA: [
      { name: "Andrew R. Kelly", image: "https://www.placecage.com/640/360" },
      { name: "Adrian Sanchez", image: "https://www.placecage.com/640/360" },
      { name: "Anderson Brown", image: "https://www.placecage.com/640/360" },
      { name: "Anna Valio", image: "https://www.placecage.com/640/360" },
      { name: "Asha Mathews", image: "https://www.placecage.com/640/360" },
      { name: "Alicia keys", image: "https://www.placecage.com/640/360" },
      { name: "Alexa Dot", image: "https://www.placecage.com/640/360" },
      { name: "Bob Squarepants", image: "https://www.placecage.com/640/360" },
      { name: "Anonymous", image: "https://www.placecage.com/640/360" },
      { name: "Rahat Verma", image: "https://www.placecage.com/640/360" },
      { name: "Aman Bansal", image: "https://www.placecage.com/640/360" },
      { name: "Piyush Goyal", image: "https://www.placecage.com/640/360" },
      { name: "Ayush Verma", image: "https://www.placecage.com/640/360" },
    ],
    UPDATES: [
      { name: "Made UI better", reference: "" },
      {
        name: "Enabled the Searched Text Highlight with react-highlight-words",
        reference: "https://www.npmjs.com/package/react-highlight-words",
      },
      {
        name: "Added reset functionality on click ouside of the working area",
        reference: "",
      },
      {
        name:
          "Working on adding react-window functionality , which will allow only those items to be fetched which are visible in the window size",
        reference: "https://www.npmjs.com/package/react-window",
      },
    ],
  },
};

export default Object.freeze(CONSTANTS);

const CONSTANTS = {
  UI: {
    TEXT_FIELD_TYPE: "text",
    CROSS_ICON: "fas fa-times fa-lg",
    TEXT_FIELD_PLACEHOLDER: "e.g. Anderson Brown",
    IMAGE_UN_AVAILABLE: "Not Available",
    REACT_HEADING: "React Autocomplete",
    REACT_PARAGRAPH: ": A High Performance TextBox Component",
    ABOUT_ORGANIZATION: "About The Organization",
    COMPANY_IMAGE:
      "https://www.vtnetzwelt.com/wp-content/uploads/2018/06/logo.svg",
    OVER_VIEW: "Overview",
    OVER_VIEW_CONTENT:
      " The React AutoComplete is a textbox component that provides a list of suggestions to select from as the user types. It has several out-of-the-box features such as data binding, filtering, grouping, UI customization, accessibility, and more.",
    DATA_BINDING: "Data Binding",
    DATA_BINDING_CONTENT:
      " You can bind data from a variety of data sources, such as an array of primitive data, JSON data collections, or remote data sources using different kinds of adaptors such as OData, OData V4, URL, JSON, and Web API. Data binding uses our data manager to manage data and also has customization options for data requests and processing.",
    DATA_BINDING_PLACEHOLDER: "Try Searching with C,E & L",
    GROUP_DATA_PLACEHOLDER: "Try typing 'Engineer' ",
    GROUP_HEADING: "Grouping",
    GROUP_CONTENT:
      "Group the suggestions based on logically grouped categories with individual headers.",
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
      {
        name: "High performance loading and searching for huge amount of Data.",
      },
      {
        name:
          "Easy Integration with other components for smooth web/mobile experience.",
      },
      {
        name:
          "Built in support for Auto-fill , Highlighted Search , Custom search",
      },
    ],
    GROUP_FILTERING_DATA: [
      {
        name: "Ayush Verma",
        profession: "Engineer",
        age: "22",
      },
      {
        name: "Aman Malhotra",
        profession: "Engineer",
        age: "22",
      },
      {
        name: "Anjali Garg",
        profession: "Engineer",
        age: "22",
      },
      {
        name: "Nandini Gupta",
        profession: "Analyst",
        age: "22",
      },
      {
        name: "Guraziz Singh",
        profession: "Data Science",
        age: "22",
      },
      {
        name: "Bhavesh Singla",
        profession: "Business",
        age: "22",
      },
    ],
    GROUPED_FILTER_DATA: {
      Engineer: [
        { name: "Ayush Verma", profession: "Engineer", age: "22" },
        { name: "Aman Malhotra", profession: "Engineer", age: "22" },
        { name: "Anjali Garg", profession: "Engineer", age: "22" },
      ],
      Analyst: [{ name: "Nandini Gupta", profession: "Analyst", age: "22" }],
      "Data Science": [
        { name: "Guraziz Singh", profession: "Data Science", age: "22" },
      ],
      Business: [{ name: "Bhavesh Singla", profession: "Business", age: "22" }],
    },
  },
};

export default Object.freeze(CONSTANTS);

/// string | Array<[[key: string], string]>
/// delimiter?: '<--p-->' | '<--l-->'

const lessonsParaText = `
    Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros.
      
    Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.
  `

const lessonsListText = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `

const favGalleryParaText1 = `
  This section currently showcases this portfolio project, which aims to share a project that represents a modern and expressive web application with a wealth of frontend and backend development concepts (This will change in future).  

  Here are some key highlights:
`
const favGalleryListText = `
  The project is built using Next.js, allowing seamless integration of the frontend and backend, eliminating the need for separate API calls.

  By leveraging Turborepo, I have created a monorepo structure, providing ample room for future expansion.

  I have implemented a decoupled data and UI approach, facilitating easy addition of new features and gradual migration to a database in the future.

  To enhance the user interface, I have used Chakra UI, a React-based UI framework. It eases the UI design process as it comes with built-in components and tools for theming and making responsive design hustles. 

  The contact form enables convenient email notifications when users leave messages.

  Each project has its own landing page, showcasing its unique story.
`

const favGalleryParaText2 = `
  Full disclosure:All my showcased projects are available on GitHub, some being redesigned while others are built from scratch. Please disregard any "coming soon" tags until they are removed.

  Through this project, I aim to express my passion for web application development. I have meticulously handcrafted every aspect, infusing it with my personality. 
  
  I invite you to explore this project, hoping it inspires you, captures your interest, or even leads to potential job opportunities.

  I value your feedback and thoughts. Feel free to leave me a message, and I'll be delighted to respond.
`

/// 1. Hiking Project
export const afriHickr = {
  excerpt:
    'Afri-Hicker is an outdoor activities web app that helps people from allover the world to visit interesting sites in Africa',
  introSummaryText: `
    Lorem ipsum dolor sit amet consectetur. Vitae non ac pellentesque accumsan lacinia. Risus pharetra a velit et.

    Sagittis justo sagittis scelerisque cras arcu eu velit praesent. Gravida a vulputate odio ullamcorper diam accumsan.
    
    Dui vitae sit arcu nisi lectus amet et. Lacus molestie leo.
 `,
  goalsText: `
    Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.

    Nisi pulvinar fermentum tristique tristique maecenas eget ornare amet. Nulla orci nisl non metus tellus. Sed purus auctor libero etiam a. Quam velit eget lectus ullamcorper duis amet in. Eget mi at dolor tempor augue eget tempor tellus. Accumsan porta aliquam nisl felis elit.

    Ullamcorper pulvinar duis at egestas. Gravida velit lorem pellentesque ut dolor volutpat at vulputate. Volutpat fermentum dui ullamcorper at ac donec sit et vulputate. Bibendum vitae congue enim pulvinar ut. Turpis arcu vitae fringilla.
  `,
  textStacksText: `
    Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. 
    Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. 
    Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. 
    Cras proin fusce orci pretium sit.

    <--l-->
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
`,
  challengesText: `
    Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros.
    
    Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.
    <--l-->
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
`,
  lessonsText: [
    ['para-1', lessonsParaText],
    ['list-1', lessonsListText],
  ],
}

/// 2. Project OptiPlanner
export const optiPlanner = {
  excerpt:
    'OptiPlanner is a desktop app that helps self-taught developers track their learning schedule. It offers study timers -like Pomodoro sessions and a Kanban system of tracking lessons and courses completion',

  introSummaryText: `
      Lorem ipsum dolor sit amet consectetur. Vitae non ac pellentesque accumsan lacinia. Risus pharetra a velit et.

      Sagittis justo sagittis scelerisque cras arcu eu velit praesent. Gravida a vulputate odio ullamcorper diam accumsan.
      
      Dui vitae sit arcu nisi lectus amet et. Lacus molestie leo.
   `,
  goalsText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.

      Nisi pulvinar fermentum tristique tristique maecenas eget ornare amet. Nulla orci nisl non metus tellus. Sed purus auctor libero etiam a. Quam velit eget lectus ullamcorper duis amet in. Eget mi at dolor tempor augue eget tempor tellus. Accumsan porta aliquam nisl felis elit.

      Ullamcorper pulvinar duis at egestas. Gravida velit lorem pellentesque ut dolor volutpat at vulputate. Volutpat fermentum dui ullamcorper at ac donec sit et vulputate. Bibendum vitae congue enim pulvinar ut. Turpis arcu vitae fringilla.
    `,
  textStacksText: `
    Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. 
    Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. 
    Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. 
    Cras proin fusce orci pretium sit.

    <--l-->
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  challengesText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros.
      
      Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.
      <--l-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  lessonsText: [
    ['para-1', lessonsParaText],
    ['list-1', lessonsListText],
  ],
}

/// 3. Project fitHustle
export const lukuFiti = {
  excerpt:
    'FitHustle is an online web store app for selling cool second hand clothes',

  introSummaryText: `
      Lorem ipsum dolor sit amet consectetur. Vitae non ac pellentesque accumsan lacinia. Risus pharetra a velit et.

      Sagittis justo sagittis scelerisque cras arcu eu velit praesent. Gravida a vulputate odio ullamcorper diam accumsan.
      
      Dui vitae sit arcu nisi lectus amet et. Lacus molestie leo.
   `,
  goalsText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.

      Nisi pulvinar fermentum tristique tristique maecenas eget ornare amet. Nulla orci nisl non metus tellus. Sed purus auctor libero etiam a. Quam velit eget lectus ullamcorper duis amet in. Eget mi at dolor tempor augue eget tempor tellus. Accumsan porta aliquam nisl felis elit.

      Ullamcorper pulvinar duis at egestas. Gravida velit lorem pellentesque ut dolor volutpat at vulputate. Volutpat fermentum dui ullamcorper at ac donec sit et vulputate. Bibendum vitae congue enim pulvinar ut. Turpis arcu vitae fringilla.
    `,
  textStacksText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. 
      Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. 
      Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. 
      Cras proin fusce orci pretium sit.

      <--l-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  challengesText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros.
      
      Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.
      <--l-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  favGalleryText: `
      Hey, This project is actually this template.

      It is supposed to be catchy, modern, expressive, and packed with a lot of concepts on UI/UX and Front-end design principles.

      With this project I want to express my love for design. Handcraft every piece of it to give it my personality.

      I hope by looking at it and exploring it, you will get in love with how I approach software engineering. In this case, front-end design.

      Do you want to dive deep?
  `,

  lessonsText: [
    ['para-1', lessonsParaText],
    ['list-1', lessonsListText],
  ],
}

/// 4. Project pesaSync
export const pesaSync = {
  excerpt:
    'PesaSync is App for managing accounts, savings, expenses, budgets, and debts (receivable and payable).',

  introSummaryText: `
      Lorem ipsum dolor sit amet consectetur. Vitae non ac pellentesque accumsan lacinia. Risus pharetra a velit et.

      Sagittis justo sagittis scelerisque cras arcu eu velit praesent. Gravida a vulputate odio ullamcorper diam accumsan.
      
      Dui vitae sit arcu nisi lectus amet et. Lacus molestie leo.
   `,
  goalsText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.

      Nisi pulvinar fermentum tristique tristique maecenas eget ornare amet. Nulla orci nisl non metus tellus. Sed purus auctor libero etiam a. Quam velit eget lectus ullamcorper duis amet in. Eget mi at dolor tempor augue eget tempor tellus. Accumsan porta aliquam nisl felis elit.

      Ullamcorper pulvinar duis at egestas. Gravida velit lorem pellentesque ut dolor volutpat at vulputate. Volutpat fermentum dui ullamcorper at ac donec sit et vulputate. Bibendum vitae congue enim pulvinar ut. Turpis arcu vitae fringilla.
    `,
  textStacksText: `
    Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. 
    Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. 
    Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. 
    Cras proin fusce orci pretium sit.

    <--l-->
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  challengesText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros.
      
      Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.
      <--l-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  lessonsText: [
    ['para-1', lessonsParaText],
    ['list-1', lessonsListText],
  ],
}

/// 5. Profile section
export const markProfile = {
  excerpt:
    'The project is based on Mark Njoroge Profile to display his skills to potential clients, employer, and to encourage anyone starting to program on their own, that it is possible to become a self-taught programmer',
  introSummaryText: `
      Lorem ipsum dolor sit amet consectetur. Vitae non ac pellentesque accumsan lacinia. Risus pharetra a velit et.

      Sagittis justo sagittis scelerisque cras arcu eu velit praesent. Gravida a vulputate odio ullamcorper diam accumsan.
      
      Dui vitae sit arcu nisi lectus amet et. Lacus molestie leo.
   `,
  goalsText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.

      Nisi pulvinar fermentum tristique tristique maecenas eget ornare amet. Nulla orci nisl non metus tellus. Sed purus auctor libero etiam a. Quam velit eget lectus ullamcorper duis amet in. Eget mi at dolor tempor augue eget tempor tellus. Accumsan porta aliquam nisl felis elit.

      Ullamcorper pulvinar duis at egestas. Gravida velit lorem pellentesque ut dolor volutpat at vulputate. Volutpat fermentum dui ullamcorper at ac donec sit et vulputate. Bibendum vitae congue enim pulvinar ut. Turpis arcu vitae fringilla.
    `,
  textStacksText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. 
      Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros. 
      Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. 
      Cras proin fusce orci pretium sit.

      <--l-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  challengesText: `
      Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan sollicitudin eros.
      
      Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum quisque blandit lacus risus et lobortis. Sed sit quisque nisl id. Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.
      <--l-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  `,
  favGalleryText: [
    ['para-1', favGalleryParaText1],
    ['list-1', favGalleryListText],
    ['para-2', favGalleryParaText2],
  ],
  lessonsText: [
    ['para-1', lessonsParaText],
    ['list-1', lessonsListText],
  ],
}

Real-Time Collaborative Text Editor Documentation
Introduction
A cutting-edge collaborative text editor built using React, Next.js, TypeScript, TailwindCSS, and the Tiptap library, enhanced with real-time synchronization powered by Y.js and @hocuspocus/provider. This project showcases the power of modern web technologies to offer users an immersive collaborative experience.

Demo
Experience the editor live: https://jenni-assessment.vercel.app/

Requirements
node (14.x or later)
npm or yarn
editor: Visual Studio Code (recommended)
Tech We Have Used
The technologies that power this real-time collaborative text editor include:

React
NextJs
TypeScript
Tailwind CSS
Tiptap
Y.js - A framework for real-time collaborative systems that integrates seamlessly with Tiptap.
@hocuspocus/provider - A powerful backend solution designed for collaborative platforms, facilitating synchronization and conflict resolution.
Getting Started & Installation
To set up and run the project locally, follow the instructions below. Start by navigating to the main project directory.

Step 2 : Running the project
Execute the following commands to install the necessary packages and run the application:

# Install dependencies
$ npm install

# Run in development mode
$ npm run dev

# Build for production
$ npm build


Folder Structure & Customization

Main Configuration: For basic site configurations such as the title, descriptions, etc., navigate to -> src/app/layout.tsx

Styling: To modify or extend the TailwindCSS configuration, refer to -> tailwind.config.js.

/public: This directory houses all static assets used in the project.

/app: Contains layouts and main application structure.

/components: Here you'll find all the components specific to the text editor.

# Challenges Faced
During the development of this project, integrating real-time synchronization posed significant challenges. My initial attempt was to utilize Next.js API, but I encountered difficulties with sockets, specifically within the serverless functions context. I considered using Supabase as a potential solution. However, the combination of Tiptap Cloud, Y.js, and @hocuspocus/provider eventually proved to be the most effective choice for achieving robust and seamless real-time collaboration.

# Architectural Choices & Future Enhancements
When building this collaborative text editor, the primary focus was on creating a functional and reliable system. Here are the justifications for our design decisions and thoughts on potential improvements:

# Why This Architecture?
Functionality First: The foremost goal was to ensure real-time collaboration, which required a seamless integration of technologies like Tiptap, Y.js, and @hocuspocus/provider. Given the complexities of synchronizing edits from multiple users in real-time without conflicts, it was essential to nail down this core functionality first.

Next.js & Serverless: Opting for Next.js allowed the project to benefit from both server-side rendering and serverless functions. However, the serverless nature of Next.js did introduce some challenges, especially when trying to integrate websockets.
Tiptap Cloud Backend: To avoid the overhead of setting up and maintaining a real-time collaborative server, Tiptap Cloud was chosen. This provided out-of-the-box support for collaborative editing without the hassle of server management.

# Tradeoffs Made:
Styling: Due to the primary focus on functionality, the current CSS and design aesthetics took a backseat. This was a deliberate tradeoff, ensuring that users first and foremost had a working product.

Testing: While the core functionalities have been tested, the coverage isn't exhaustive. Comprehensive testing, especially for edge cases, was sacrificed in the interest of time.

# Future Enhancements:
UI/UX Overhaul: With the core functionality in place, the next logical step would be to refine the user interface and experience, ensuring that it's both intuitive and visually appealing.

Enhanced Testing: More rigorous test cases need to be written, with a focus on end-to-end testing. This would help in identifying potential bottlenecks or errors that might occur with multiple users collaborating simultaneously.

Performance Optimizations: As the project scales and caters to more concurrent users, performance optimizations will become crucial. Techniques like lazy loading, chunk splitting, and efficient data serialization/deserialization can be explored.

Expand Features: With the foundational architecture in place, it would be relatively straightforward to introduce additional features such as version histories, user roles, and permissions, or even integrate plugins for additional rich-text functionalities.
Refined Error Handling: Enhancing the error-handling mechanism to be more user-friendly, especially during synchronization conflicts or connectivity issues, would improve the overall user experience

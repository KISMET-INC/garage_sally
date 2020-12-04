
# Garage Sally
A responsive web app that allows people to post, search, and share local garage sales, as well as, check in so you can see how popular it is. It is like an in person ebay combined with the functionality of a check-in app.


## Visuals


![alt text](/readme_images/garage_sally_01.jpg)
![alt text](/readme_images/garage_sally_02.jpg)
![alt text](/readme_images/garage_sally_03.jpg)
![alt text](/readme_images/garage_sally_05.jpg)


## Installation

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. 

Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. 

If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

Clone the repository down to your local drive by opening up a terminal in the folder of your choice and type the code: 

```bash
git clone https://github.com/KISMET-INC/garage_sally.git
```

Navigate into the main folder (which contains a package.json file) 
in the command prompt type the code:

```bash
npm init -y
````

Navigate into the client folder (which contains a package.json file) in the command prompt type the code:

```bash
npm init -y
````

Open the prototype branch in your IDE of choice.

## Contributors

Luis Cardona :  
-Lead Front-End Developer
	-UI Mockup Design
	-Framework
	-Mobile First Approach 
	-Responsive Layout
	-State Object Rendering

Kristen : 
Front-end API calls to the server using Axios
Connected backend login controller with front-end form, including data validation and password hashing
Added to the user controller the ability to hash passwords
Kim: 
Implemented RESTful backend APIs to make calls to the database 
Configured the server to link the front-end to the back-end
Created and maintained back-end models for mapping to the database
Incorporated a file/image upload feature using a front-end converter to map files to back-end models

## Support

If you have any questions or comments about this project email one of its main contributors:
[Luis Cardona](mailto:cardona-luis@outlook.com)
[Kristen San Martin](mailto:kmoreland909@gmail.com)
[Kim Greenbush](mailto:kim_greenbush@icloud.com




## Authors and Acknowledgment
We would like to thank all of the amazing instructors and TAs at [Coding Dojo](https://www.codingdojo.com)for teaching us the skills needed to create and develop this project.

## Project Status
Garage Sally is currently still in its prototype stage.

## Future
In future updates we plan to add these features:
Rating System
Sharing a local garage
Compatibility with tablet and desktop devices
Filtering garage sales
Requesting users location (so they don’t have to type it in)
Updating from Mongo DB to a relational database
Completing the secure login  registration and adding front-end and back-end cookies
Native support : React Native, Titanium, Xamarin, 

## Contributing
This is an open-source project and welcoming to any developer who is interested in creating a new network with similar interests and hobbies. If you would like to contribute contact one of our main contributors here:

[Luis Cardona](mailto:cardona-luis@outlook.com)
[Kristen San Martin](mailto:kmoreland909@gmail.com)
[Kim Greenbush](mailto:kim_greenbush@icloud.com)


#Requirements 

npm init -y
npm install express
npm install mongoose
npm install cors
npx create-react-app client
cd client
npm install axios
npm install @reach/router
npm install @material-ui/core

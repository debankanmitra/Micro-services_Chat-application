# Micro-services_Chat-application

{
  "Name": " shaman",
  "Email": "shaman@gmail.com",
  "Uuid" : "eXrW3AzPVqcQoCuS08diVEoFgFj2" ,
	"ProfilePic" : "https://lh3.googleusercontent.com/a/AGNmyxbuVnPKB76m23MEahEtYw9IEmGDG4fgAeutIsrcFQ=s96-c",
	"EmailVerified" : true,
	"DarkMode" : false
}


I am a react newbie i am building 1-2 projects in react , while using the framework the thing i have noticed or struggling with that , i am not able to maintain a parent child relationship between 2 react components which causing difficulty in passing props down to the child component from parent when it is needed , EX: lets say i have a message-bar component so to show something after typing in the message-screen component i have to use the message-screen as a child of message-bar component but for me it is logically unacceptable because if i put message-screen inside message-bar it will render inside the small bar , the approach i took while creating the application is that i first created and placed all  the components(static) using grid in my page and and styled them using styled css  and after i applied hooks to make it interactive and stateful and then i came across this parent child relationship problem and i also struggled with using context api because parent and child component doesn't have a common component and i have to start the context from the very root (App.jsx) which is making my code less readable and very much difficult to understand and i also tried another way which is importing a component where i need to send data as props but this approach also failed because when i am declaring the component inside the return statement to send props , an extra component is rendering in the screen which is making the application more horrible , 

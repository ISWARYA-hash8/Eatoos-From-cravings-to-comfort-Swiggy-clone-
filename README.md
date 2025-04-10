#namaste react --> looks good

#parcel
-Dev Build
-local server
-HMR ( hot module replacement ) --> automatically refresh the page 
Parcel is a beast

-File Watching Algorithm - written in c++
-Faster Builds( doing caching things up like uses very less second)
-Image optimization
-Minification
-Bundling
-Compress
-consistent Hashing
-Code spliting
-Diffrential Bundling --> to support older browsers
-Diagnostic
-Error handling
-HTTPs ---> to host in HTTPs
-Tree Shaking --> if you have 100 of methods but you use few then it     removes unused code

FOOD APP
/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Card
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/




#React Hooks
(NOrmal js utility function)

--UseState()  (used 80%) --> SuperPowerful state variables in react
--useEffect()



-------
howcan we make api call?







// if(listOfRestaurants.length===0){
  //   return <h1>loading....</h1>
  // }   //not a gud practice so so shimmer UI


we cannot call useState inside if-else

--------------------------------
single page application - Loaded once and renders again without loading

-------------------------------
>>>>>> What is React useParams?
The useParams hook in React Router means that the dynamic parts of URLs are just easy to access within the app. It returns URL route parameters as an object where keys are the parameters on that route and values are segment pieces from the matching URL.

For example, in a route like /blog/:id, you could access id using useParams from the component being rendered. Given the URL /blog/123, useParams() will return { id: "123" }. This comes in handy for dynamic rendering of content depending on the URL.

The useParams hook is one of the several hooks in React router. It has been available in React router since version 5. You can use it to retrieve route parameters from the component rendered by the matching route. You will explore the React Router useParams hook and how to use it in this article.
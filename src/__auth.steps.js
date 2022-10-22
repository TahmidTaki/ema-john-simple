/* 
auth setup
1. create firebase project
2. enable web and google sing in method
3. install firebase
4. get firebase config in project
5. export app
*/

/* 
1. Create UserContext (Auth Context): 
here userContext-->component name
userContext provides authContext

2. create AuthContext (export it to be used inside useContext) 
3. set AuthContext.provider in return function
4. Make sure to use the children
5. AuthContext.provider will pass props like value={authInfo}
6. index.js file--> UserContext> <App/> </UserContext
7. Get Form data
8. getAuth in UserContext
9. 



sign out:
 useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);
*/

/* 
Firebase hosting: 
one time pc install and firebase login

for each project: 
1. firebase init
2. make sure for public directory: select build
3. single page application yes
4.  for every deploy npm run build
5. firebase deploy
*/
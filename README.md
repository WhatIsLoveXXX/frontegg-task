## requirements

- JWT must not be stored in customer backend
- JWT must be stored in customer frontend for SSR support
- Customer should be able to get the loggedin user in getServerSideProps()
- **No** need to SSG support
- Cookie must be httpOnly and expire in (the same as JWT)



## steps
- Build frontend small app with three buttons (login, logout, get user)
- Get user must console log the logged in
- When refresh the page, print the logged in user in dom (devtools network tab)